package com.br.meuconsumo.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class StandardError implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer status;
    private String error;
    private String message;
}
