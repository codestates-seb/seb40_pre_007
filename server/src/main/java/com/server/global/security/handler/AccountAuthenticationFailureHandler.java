package com.server.global.security.handler;

import com.google.gson.Gson;
import com.server.global.security.exception.dto.ErrorResponseBasic;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class AccountAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {

        // 인증 실패시 보내는 error Response;
        senErrorResponse(response);
    }

    private void senErrorResponse(HttpServletResponse response) throws IOException {

        ErrorResponseBasic authenticationEx = new ErrorResponseBasic(HttpStatus.UNAUTHORIZED.value(), "FailToAuthentication", "인증에 실패하여 로그인을 할 수 없습니다.");


        String authenticationExJson = new Gson().toJson(authenticationEx);

        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(authenticationExJson);
    }
}
