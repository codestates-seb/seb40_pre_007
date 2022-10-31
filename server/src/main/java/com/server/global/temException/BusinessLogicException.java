package com.server.global.temException;

import lombok.Getter;

// 서비스 계층에서 사용할 Exception 클래스 입니다.
public class BusinessLogicException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode){
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
