package com.br.meuconsumo.dto;

import com.br.meuconsumo.model.enums.ConsumptionCategoryEnum;
import com.br.meuconsumo.model.enums.ConsumptionTypeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class ConsumptionDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    @NotNull
    @Digits(integer = 10, fraction = 2)
    private BigDecimal calculationFactor;
    @NotNull
    private ConsumptionCategoryEnum category;
    @NotNull
    private LocalDate date;
    @NotNull
    @Digits(integer = 10, fraction = 2)
    private BigDecimal quantity;
    @NotNull
    private Long time;
    @NotNull
    private ConsumptionTypeEnum type;
    @NotNull
    @Digits(integer = 10, fraction = 2)
    private BigDecimal value;

    private Long userId;
}
