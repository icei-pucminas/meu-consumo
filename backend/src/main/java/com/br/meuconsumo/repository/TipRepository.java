package com.br.meuconsumo.repository;

import com.br.meuconsumo.model.entity.Tip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipRepository extends JpaRepository<Tip, Long> {
}
