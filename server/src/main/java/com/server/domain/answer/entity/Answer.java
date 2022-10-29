/*package com.server.domain.answer.entity;

import com.server.domain.board.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@NoArgsConstructor
@Entity
@Setter
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //IDENTITY 기본키 생성 전략
    private long answerId;

    private Board board;

    @Column(nullable = false, updatable = true, unique = false)
    private String content;

    public Answer(String content) {
        this.content = content;
    }

}*/
