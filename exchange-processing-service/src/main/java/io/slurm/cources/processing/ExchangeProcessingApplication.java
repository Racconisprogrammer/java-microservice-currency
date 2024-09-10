package io.slurm.cources.processing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ExchangeProcessingApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExchangeProcessingApplication.class, args);
	}

}
