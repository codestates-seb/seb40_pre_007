package com.server.global.security.handler;

import com.google.gson.Gson;
import com.server.global.security.exception.dto.SuccessResponseBasic;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class AccountAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        log.info("로그인에 성공하였습니다.");

        SuccessResponseBasic authenticationSuccess  = new SuccessResponseBasic(HttpStatus.ACCEPTED.value(), "Success To Authentication", "인증에 성공하였습니다.");

        String authenticationSuccessJson = new Gson().toJson(authenticationSuccess);

        response.getWriter().write(authenticationSuccessJson);
    }
}
