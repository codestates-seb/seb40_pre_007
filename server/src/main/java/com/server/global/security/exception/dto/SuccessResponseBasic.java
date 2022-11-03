package com.server.global.security.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SuccessResponseBasic {
    private int state;
    private String successMessage;
    private String message;
    private String displayName;
}
