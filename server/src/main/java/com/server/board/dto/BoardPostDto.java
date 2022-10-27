package com.server.board.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class BoardPostDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title; // 게시글 제목

    @NotBlank(message = "내용을 입력하세요.")
    private String content; // 게시글 본문

    // 유저의 로그인 유효성 검증 변수 추가해야함!


    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
