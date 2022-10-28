package com.server.domain.board.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum ExceptionCode {
    ACCOUNT_NOT_FOUND(404, "Account Not Found"),
    BOARD_NOT_FOUND(400,"Board Not Found");

    @Getter
    private int status;

    @Getter
    private String message;
}

