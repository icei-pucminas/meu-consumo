package com.br.meuconsumo.model.mapper;

import com.br.meuconsumo.dto.UserDTO;
import com.br.meuconsumo.model.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO toDto(User entity);

    User toEntity(UserDTO dto);
}
