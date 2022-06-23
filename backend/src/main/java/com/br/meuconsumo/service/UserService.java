package com.br.meuconsumo.service;

import com.br.meuconsumo.dto.UserDTO;
import com.br.meuconsumo.exceptions.BussinesRuleException;
import com.br.meuconsumo.model.entity.User;
import com.br.meuconsumo.model.mapper.UserMapper;
import com.br.meuconsumo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserMapper mapper;
    private final UserRepository repository;
    private final BCryptPasswordEncoder encoder;

    public Boolean existsById(Long id) {
        return repository.existsById(id);
    }

    public Long getAuthenticateUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = (String)authentication.getPrincipal();
        return repository.findByEmail(email)
                .orElseThrow(() -> new BussinesRuleException("Usário não está cadastrado", "usuario-nao-encontrado")).getId();
    }

    @Transactional
    public Long save(UserDTO dto) {
        User user = mapper.toEntity(dto);
        user.setPassword(encoder.encode(dto.getPassword()));
        if (!StringUtils.equals(dto.getPassword(), dto.getConfirmPassword())) {
            throw new BussinesRuleException("Senha e Confirmar Senha devem ser iguais", "senha-invalida");
        }
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new BussinesRuleException("Usuário ja cadastro", "email-existente");
        }
        return repository.save(user).getId();
    }
}
