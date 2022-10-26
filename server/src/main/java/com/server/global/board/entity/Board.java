package com.server.global.board.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Board {

    @Id // 데이터베이스 테이블의 BOARD 테이블과 매핑
    private long boardId;
    private String title;
    private String content;
    private long views;

}
