package com.br.meuconsumo.controller;

import com.br.meuconsumo.dto.TipDTO;
import com.br.meuconsumo.service.TipService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/tip")
public class TipController {

    private final TipService service;

    @PostMapping
    public ResponseEntity<TipDTO> save(@Valid @RequestBody TipDTO dto) {
        log.info("REST to save entity: {}", dto);
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }
}
