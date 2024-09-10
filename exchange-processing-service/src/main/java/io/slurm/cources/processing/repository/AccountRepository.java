package io.slurm.cources.processing.repository;

import io.slurm.cources.processing.model.AccountEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<AccountEntity, Long> {
    List<AccountEntity> findByUserId(Long userId);
}
