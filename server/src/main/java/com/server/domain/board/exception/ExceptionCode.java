package com.server.domain.board.exception;

import lombok.Getter;

public enum ExceptionCode {
    ACCOUNT_NOT_FOUND(404, "Account Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message){
        this.status = status;
        this.message = message;
    }
}
