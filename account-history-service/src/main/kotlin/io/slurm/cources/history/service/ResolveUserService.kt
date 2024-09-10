package io.slurm.cources.history.service

import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoRestTemplateFactory
import org.springframework.stereotype.Service

@Service
class ResolveUserService(
    private val restTemplateFactory: UserInfoRestTemplateFactory,
    private val resource: ResourceServerProperties
) {
    fun resolveUserId(): Long? {
        val restTemplate = restTemplateFactory.userInfoRestTemplate
        val response = restTemplate.getForEntity(resource.userInfoUri, Map::class.java).body

        return response?.let { r  -> r["principal"] as MutableMap<*, *> }
            .let { v -> v?.get("userId") as Int? }
            .let { u -> u?.toLong() }
    }
}