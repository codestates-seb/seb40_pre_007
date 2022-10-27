package com.server.global.board.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Board {

    @Id // 데이터베이스 테이블의 BOARD 테이블과 매핑
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY 기본 키 생성 전략
    private Long boardId;
    private String title;
    private String content;
    private long views;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private BoardStatus boardStatus = BoardStatus.BOARD_ACTIVE;

    public enum BoardStatus {
        BOARD_ACTIVE("활성중");

        @Getter
        private String status;

        BoardStatus(String status){
            this.status = status;
        }
    }

}
