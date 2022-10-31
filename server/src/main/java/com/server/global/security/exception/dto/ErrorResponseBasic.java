package com.server.global.security.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorResponseBasic {
    private int state;
    private String exception;
    private String message;
}
