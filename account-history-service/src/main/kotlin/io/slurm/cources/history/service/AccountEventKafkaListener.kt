package io.slurm.cources.history.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import io.slurm.cources.history.model.AccountEvent
import io.slurm.cources.history.repository.AccountEventRepository
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Service

@Service
class AccountEventKafkaListener(private val repository: AccountEventRepository) {
    private val mapper = jacksonObjectMapper()

    @KafkaListener(topics=["account-events"])
    fun consumeEvent(record: ConsumerRecord<Long, String>) {
        val key = record.key()
        val value = record.value()

        val evt: AccountEvent = try {
            mapper.readValue(value)
        } catch (e: Exception) {
            throw e
        }

        repository.save(evt)
    }
}