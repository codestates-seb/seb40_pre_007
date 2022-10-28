package com.server.domain.board.dto;


import com.server.domain.board.entity.Board;
import com.server.domain.board.service.BoardService;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Builder
@Getter
public class BoardResponseDto {
    private long boardId;
    private String title;
    private String content;
    private long views;
    private Board.BoardStatus boardStatus;


    public String getBoardStatus(){
        return boardStatus.getStatus();
    }

}
