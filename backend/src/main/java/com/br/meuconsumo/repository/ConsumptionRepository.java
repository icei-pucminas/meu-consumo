package com.br.meuconsumo.repository;

import com.br.meuconsumo.model.entity.Consumption;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ConsumptionRepository extends JpaRepository<Consumption, Long> {
    @Query("select c from Consumption c where c.id = ?1 and c.user.id = ?2")
    Optional<Consumption> findByIdAndUserId(Long id, Long userId);
    @Query("select c from Consumption c where c.user.id = ?1")
    Page<Consumption> findAllByUserId(Long userId, Pageable pageable);
}
