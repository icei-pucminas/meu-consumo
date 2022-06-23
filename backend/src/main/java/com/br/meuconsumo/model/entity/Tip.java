package com.br.meuconsumo.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.io.Serializable;


@Getter
@Setter
@Entity
@Table(name = "tb_tip")

public class Tip implements Serializable{
    private static final long serialVersionUID = 1L;
    private static final String SEQ_TIP = "seq_tip";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ_TIP)
    @SequenceGenerator(name = SEQ_TIP, sequenceName = SEQ_TIP, allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "message")
    private String message;

    @Column(name = "category")
    private String category;
}
