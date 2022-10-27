package com.server.global.security.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 로그인 인증 성공 시 추가 작업을 할 수 있는 핸들러
// 추가 작업으로는 로그 기록, 로그인에 성공한 사용자 정보를 Response 로 전송 등이 있다.
@Slf4j
public class AccountAccessSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        // 추가 작업
        log.info("로그인에 성공하여 JWT를 발급합니다.");
    }
}
