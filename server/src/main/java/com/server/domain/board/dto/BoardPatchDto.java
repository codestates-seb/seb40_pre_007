package com.server.domain.board.dto;

import com.server.domain.board.entity.Board;
import lombok.Data;

@Data
public class BoardPatchDto {

    private long boardId;
    private String title;
    private String content;

    public Board toBoard(){
        Board board = new Board();
        board.setBoardId(boardId);
        board.setTitle(title);
        board.setContent(content);
        return board;
    }


}
