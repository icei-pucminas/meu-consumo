package com.br.meuconsumo.controller;

import com.br.meuconsumo.dto.ConsumptionDTO;
import com.br.meuconsumo.service.ConsumptionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/consumption")
public class ConsumptionController {

    private final ConsumptionService service;

    @PostMapping
    public ResponseEntity<ConsumptionDTO> save(@Valid @RequestBody ConsumptionDTO dto) {
        log.info("REST to save entity: {}", dto);
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping
    public Page<ConsumptionDTO> findAll(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConsumptionDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}
