package com.br.meuconsumo.service;

import com.br.meuconsumo.dto.ConsumptionDTO;
import com.br.meuconsumo.exceptions.BussinesRuleException;
import com.br.meuconsumo.model.entity.Consumption;
import com.br.meuconsumo.model.mapper.ConsumptionMapper;
import com.br.meuconsumo.repository.ConsumptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ConsumptionService {

    private final ConsumptionMapper mapper;
    private final ConsumptionRepository repository;
    private final UserService userService;

    @Transactional
    public ConsumptionDTO save(ConsumptionDTO dto) {
        dto.setUserId(userService.getAuthenticateUserId());
        Consumption consumption = mapper.toEntity(dto);
        return mapper.toDto(repository.save(consumption));
    }

    @Transactional
    public Page<ConsumptionDTO> findAll(Pageable pageable) {
        return repository.findAllByUserId(userService.getAuthenticateUserId(), pageable).map(mapper::toDto);
    }

    @Transactional
    public ConsumptionDTO findById(Long id) {
        Consumption consumption = repository.findByIdAndUserId(id, userService.getAuthenticateUserId())
                .orElseThrow(() -> new BussinesRuleException("Consumo não encontrado", "consumo-nao-encontrado"));
        return mapper.toDto(consumption);
    }

    @Transactional
    public void delete(Long id) {
        Consumption consumption = repository.findByIdAndUserId(id, userService.getAuthenticateUserId())
                .orElseThrow(() -> new BussinesRuleException("Consumo não encontrado", "consumo-nao-encontrado"));
        repository.deleteById(consumption.getId());
    }
}
