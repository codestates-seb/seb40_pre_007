package com.server.global.security.dto;

import lombok.Getter;

// 클라이언트가 전송한 Username/Password 정보를 Security Filter에서 사용할 수 있도록 역직렬화를 위한 클래스
@Getter
public class LoginForm {
    private String email;
    private String password;
}
