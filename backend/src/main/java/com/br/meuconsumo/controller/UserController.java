package com.br.meuconsumo.controller;

import com.br.meuconsumo.dto.UserDTO;
import com.br.meuconsumo.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService service;

    @PostMapping("/new")
    public ResponseEntity<Long> save(@Valid @RequestBody UserDTO dto) {
        log.info("REST to save entity: {}", dto);
        return ResponseEntity.ok(service.save(dto));
    }
}
