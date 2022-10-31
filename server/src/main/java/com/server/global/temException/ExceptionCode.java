package com.server.global.temException;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum ExceptionCode {
    ACCOUNT_NOT_FOUND(404, "Account Not Found"), // 사용자를 찾을 수 없음
    UNAUTHORIZED_ACCOUNT(401, "Unauthorized Account"), // 사용자가 유효한 인증 자격 증명이 없음
    ACCESS_DENIED_ACCOUNT(403, "Access Denied Account"), // 서버에 요청 되었으나 사용자 권한이 없음
    ACCOUNT_EXISTS(409, "Account Exists"), // 이미 존재하는 사용자
    ACCOUNT_DISPLAYNAME_NOT_FOUND(400, "이름을 입력하세요"),
    ACCOUNT_EMAIL_NOT_FOUND(400, "Email을 입력하세요"),
    ACCOUNT_PASSWORD_NOT_FOUND(400, "비밀번호를 입력하세요"),
    BOARD_NOT_FOUND(404,"Board Not Found"), // 게시글을 찾을 수 없음
    BOARD_EXISTS(409, "Board Exists"), // 게시글이 이미 존재함
    BOARD_TITLE_NOT_FOUND(400, "제목을 입력하세요"), // 게시글제목을 작성하지 않음
    BOARD_CONTENT_NOT_FOUND(400, "내용을 입력하세요"), // 게시글 본문을 작성하지 않음
    ANSWER_NOT_FOUND(404, "Answer Not Found"), // 답변을 찾을 수 없음
    ANSWER_EXISTS(409, "Answer Exists"), // 이미 답변이 존재함
    ANSWER_CONTENT_NOT_FOUND(400, "내용을 입력하세요"); // 답변 내용을 작성하지 않음

    @Getter
    private int status;

    @Getter
    private String message;


}

