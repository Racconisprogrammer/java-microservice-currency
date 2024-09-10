package io.slurm.cources.processing.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {
    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.resourceId("processing");
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().sessionManagement().disable()
                .requestMatchers().antMatchers("/**").and().authorizeRequests()
                .anyRequest().access("#oauth2.hasScope('web')");
    }
}
