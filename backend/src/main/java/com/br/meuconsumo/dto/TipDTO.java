package com.br.meuconsumo.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
public class TipDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    @NotBlank
    @Size(max = 50)
    private String title;
    @NotBlank
    @Size(max = 255)
    private String message;
    @NotBlank
    @Size(max = 20)
    private String category;
}
