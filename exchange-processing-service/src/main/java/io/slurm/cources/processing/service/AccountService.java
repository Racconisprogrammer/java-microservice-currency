package io.slurm.cources.processing.service;

import io.slurm.cources.processing.dto.NewAccountDTO;
import io.slurm.cources.processing.model.AccountEntity;
import io.slurm.cources.processing.model.AccountEvent;
import io.slurm.cources.processing.model.Operation;
import io.slurm.cources.processing.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {

    public final AccountRepository accountRepository;

    public final ResolveUserService userService;

    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public AccountEntity createNewAccount(NewAccountDTO dto) {
        var userId = userService.resolveUserId();

        var account = new AccountEntity();
        account.setCurrencyCode(dto.getCurrencyCode());
        account.setUserId(userId);
        account.setBalance(new BigDecimal(0));

        var created = accountRepository.save(account);
        return created;
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.REPEATABLE_READ)
    public AccountEntity addMoneyToAccount(String uid, Long accountId, Long targetAccount, Operation operation, BigDecimal money) {
        Optional<AccountEntity> account = accountRepository.findById(accountId);
        var result = account.map( acc -> {
            var balance = acc.getBalance().add(money);
            acc.setBalance(balance);

            eventPublisher.publishEvent(createEvent(uid, acc, targetAccount, operation, money));

            return accountRepository.save(acc);
        }).orElseThrow(() -> new IllegalArgumentException("Account with ID " + accountId + " not found"));
        return result;
    }

    public AccountEntity getAccountById(Long id) {
        return accountRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Account with ID " + id + " not found"));
    }

    public List<AccountEntity> getAllAccount() {
        var userId = userService.resolveUserId();
        return accountRepository.findByUserId(userId);
    }

    private AccountEvent createEvent(String uid, AccountEntity acc, Long targetId, Operation operation, BigDecimal amount) {
        var current = new Date();
        return AccountEvent.builder()
                .uuid(uid)
                .accountId(acc.getId())
                .currency(acc.getCurrencyCode())
                .operation(operation)
                .fromAccount(targetId)
                .amount(amount)
                .userId(acc.getUserId())
                .created(current)
                .build();
    }
}
