package com.br.meuconsumo.model.mapper;

import com.br.meuconsumo.dto.TipDTO;
import com.br.meuconsumo.model.entity.Tip;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TipMapper {

    TipDTO toDto(Tip entity);

    Tip toEntity(TipDTO dto);
}
