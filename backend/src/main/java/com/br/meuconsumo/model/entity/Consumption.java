package com.br.meuconsumo.model.entity;

import com.br.meuconsumo.model.enums.ConsumptionCategoryEnum;
import com.br.meuconsumo.model.enums.ConsumptionTypeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "tb_consumption")

public class Consumption implements Serializable{
    private static final long serialVersionUID = 1L;
    private static final String SEQ_CONSUMPTION = "seq_consumption";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ_CONSUMPTION)
    @SequenceGenerator(name = SEQ_CONSUMPTION, sequenceName = SEQ_CONSUMPTION, allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "calculation_factor")
    private BigDecimal calculationFactor;

    @Column(name = "category")
    @Enumerated(value = EnumType.STRING)
    private ConsumptionCategoryEnum category;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "quantity")
    private BigDecimal quantity;

    @Column(name = "time")
    private Long time;

    @Column(name = "type")
    @Enumerated(value = EnumType.STRING)
    private ConsumptionTypeEnum type;

    @Column(name = "value")
    private BigDecimal value;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}

