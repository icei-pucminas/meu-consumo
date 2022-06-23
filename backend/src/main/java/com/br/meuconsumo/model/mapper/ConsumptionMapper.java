package com.br.meuconsumo.model.mapper;

import com.br.meuconsumo.dto.ConsumptionDTO;
import com.br.meuconsumo.model.entity.Consumption;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ConsumptionMapper {

    @Mapping(source = "user.id", target = "userId")
    ConsumptionDTO toDto(Consumption entity);

    @Mapping(source = "userId", target = "user.id")
    Consumption toEntity(ConsumptionDTO dto);

    List<ConsumptionDTO> toListDto(List<Consumption> entity);
}
