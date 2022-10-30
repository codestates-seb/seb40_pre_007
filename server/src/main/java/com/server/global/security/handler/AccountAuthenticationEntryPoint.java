package com.server.global.security.handler;

import com.google.gson.Gson;
import com.server.global.exception.dto.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// AuthorizationFilter 의 JWT 검증 과정에서 AuthenticationException 이 발생할 경우 호출되는 핸들러 같은 역할
@Component
@Slf4j
public class AccountAuthenticationEntryPoint implements AuthenticationEntryPoint {

    // 처리하고자 하는 로직을 commence() 메서드에 구현
    // AuthenticationException 이 발생할 경우, ErrorResponse 를 생성하여 클라이언트에 전송
    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {


        Exception exception = (Exception) request.getAttribute("exception");

        ErrorResponse errorResponse =
                new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "UnAuthentication", "인증에 실패하였습니다.");

        String authenticationJson = new Gson().toJson(errorResponse, ErrorResponse.class);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(authenticationJson);

        logExceptionMessage(authException, exception);
    }

    private void logExceptionMessage(AuthenticationException authException, Exception exception) {
        String message = exception != null ? exception.getMessage() : authException.getMessage();
        log.warn("Unauthorized error happend: {}", message);
    }
}
