package io.slurm.cources.history

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class HistoryApplication

fun main(args: Array<String>) {
	runApplication<HistoryApplication>(*args)
}
