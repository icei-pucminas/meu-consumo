package com.br.meuconsumo.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class CredentialsDTO {

    private String email;
    private String password;
}
