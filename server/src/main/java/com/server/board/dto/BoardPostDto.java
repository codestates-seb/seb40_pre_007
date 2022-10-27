package com.server.board.dto;

import com.server.board.entity.Board;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class BoardPostDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title; // 게시글 제목

    @NotBlank(message = "내용을 입력하세요.")
    private String content; // 게시글 본문

    // 유저의 로그인 유효성 검증 변수 추가해야함!

    public Board toBoard(){
        Board board = new Board();
        board.setTitle(title);
        board.setContent(content);

        return board;
    }


}
