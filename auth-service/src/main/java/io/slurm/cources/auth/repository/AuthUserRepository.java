package io.slurm.cources.auth.repository;

import io.slurm.cources.auth.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthUserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUsername(String name);
}
