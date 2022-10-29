package com.server.domain.board.entity;

import com.server.domain.account.entity.Account;
import com.server.domain.answer.entity.Answer;
import com.server.global.common.auditing.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Board extends BaseTimeEntity {

    @Id // 데이터베이스 테이블의 BOARD 테이블과 매핑
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY 기본 키 생성 전략
    private Long boardId;

    @Column(nullable = false, updatable = true, unique = false, length = 100)
    private String title;

    @Column(nullable = false, updatable = true, unique = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @OneToMany (mappedBy = "board", cascade = CascadeType.PERSIST)
    private List<Answer> answerList = new ArrayList<>();

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private BoardStatus boardStatus = BoardStatus.BOARD_ACTIVE;

    public void setAnswer(Answer answer) {
        answerList.add(answer);
        if (answer.getBoard() != this) {
            answer.setBoard(this);
        }
    }


    // 추후 status에 대한 논의 필요
    public enum BoardStatus {
        BOARD_ACTIVE("활성중");

        @Getter
        private String status;

        BoardStatus(String status){
            this.status = status;
        }
    }

}
