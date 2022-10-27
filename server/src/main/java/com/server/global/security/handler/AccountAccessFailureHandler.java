package com.server.global.security.handler;

import com.google.gson.Gson;
import com.server.global.exception.dto.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 인증 실패시, 추가 작업을 해주는 핸들러
@Slf4j
public class AccountAccessFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {

        log.error("로그인 인증에 실패하였습니다. # Authentication failed: {}", exception.getMessage());


    }

    private void sendErrorResponse(HttpServletResponse response) throws IOException {

        ErrorResponse errorResponse =
                new ErrorResponse(HttpStatus.FORBIDDEN.value(), "Forbidden", "접근 권한이 없습니다.");

        // Error 정보가 담긴 객체(ErrorResponse)를 JSON 문자열로 변환하는 Gson 라이브러리 사용
        Gson gson = new Gson();
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));    // ErrorResponse 객체를 JSON 포맷 문자열로 변환 후, 출력 스트림 생성
    }
}
