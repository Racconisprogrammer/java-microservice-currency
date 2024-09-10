package io.slurm.cources.history.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer

@Configuration
@EnableResourceServer
class ResourceServerConfiguration : ResourceServerConfigurerAdapter() {
    override fun configure(resources: ResourceServerSecurityConfigurer) {
        resources.resourceId(RESOURCE_ID)
    }

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http.csrf().disable()
            .sessionManagement().disable()
            .authorizeRequests()
            .and()
            .requestMatchers()
            .antMatchers(SECURED_PATTERN).and().authorizeRequests()
            .anyRequest().access(SECURED_SCOPE)
    }

    companion object {
        private const val RESOURCE_ID = "history"
        private const val SECURED_SCOPE = "#oauth2.hasScope('web')"
        private const val SECURED_PATTERN = "/**"
    }
}