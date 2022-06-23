package com.br.meuconsumo.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BussinesRuleException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    private String error;

    public BussinesRuleException(String message, Throwable cause) {
        super(message, cause);
    }

    public BussinesRuleException(String message, String error) {
        super(message);
        this.error = error;
    }
}
