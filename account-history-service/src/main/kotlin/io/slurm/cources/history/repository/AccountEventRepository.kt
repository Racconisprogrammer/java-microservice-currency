package io.slurm.cources.history.repository

import io.slurm.cources.history.model.AccountEvent
import io.slurm.cources.history.model.EventKey
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AccountEventRepository: JpaRepository<AccountEvent, EventKey> {
    fun findAllByAccountIdAndUserIdOrderByCreatedDesc(accountId: Long, userId: Long?): List<AccountEvent>
}