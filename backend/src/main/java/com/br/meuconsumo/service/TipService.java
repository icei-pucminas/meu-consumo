package com.br.meuconsumo.service;

import com.br.meuconsumo.dto.TipDTO;
import com.br.meuconsumo.exceptions.BussinesRuleException;
import com.br.meuconsumo.model.entity.Tip;
import com.br.meuconsumo.model.mapper.TipMapper;
import com.br.meuconsumo.repository.TipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TipService {

    private final TipMapper mapper;
    private final TipRepository repository;

    @Transactional
    public TipDTO save(TipDTO dto) {
        Tip tip = mapper.toEntity(dto);
        return mapper.toDto(repository.save(tip));
    }

    @Transactional
    public TipDTO findById(Long id) {
        Tip tip = repository.findById(id).orElseThrow(()->new BussinesRuleException("Dica não encontrada", "dica-nao-encontrada"));
        tip.setCategory(tip.getCategory().trim());
        return mapper.toDto(tip);
    }
}
