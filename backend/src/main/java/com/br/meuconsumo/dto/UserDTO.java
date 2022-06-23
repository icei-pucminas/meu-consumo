package com.br.meuconsumo.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    @NotBlank
    @Size(max = 80)
    private String name;
    @NotBlank
    @Email
    @Size(max = 40)
    private String email;
    @NotBlank
    @Size(max = 30)
    private String password;
    @NotBlank
    @Size(max = 30)
    private String confirmPassword;
}
