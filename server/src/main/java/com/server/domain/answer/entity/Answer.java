package com.server.domain.answer.entity;

import com.server.domain.account.entity.Account;
import com.server.domain.board.entity.Board;
import com.server.global.common.auditing.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@NoArgsConstructor
@Entity
@Setter
public class Answer extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //IDENTITY 기본키 생성 전략
    private long answerId;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @Column(nullable = false, updatable = true, unique = false)
    private String content;

    public Answer(String content) {
        this.content = content;
    }
}
