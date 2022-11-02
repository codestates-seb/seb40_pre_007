package com.server.global.security.handler;

import com.google.gson.Gson;
import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.security.exception.dto.SuccessResponseBasic;
import com.server.global.temException.BusinessLogicException;
import com.server.global.temException.ExceptionCode;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
@Component
public class AccountAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final AccountRepository accountRepository;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        log.info("로그인에 성공하였습니다.");

        Account account = accountRepository.findByEmail(authentication.getName()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ACCOUNT_NOT_FOUND));
        String accountName = account.getDisplayName();

        SuccessResponseBasic authenticationSuccess  = new SuccessResponseBasic(HttpStatus.ACCEPTED.value(), "Success To Authentication", "인증에 성공하였습니다.", accountName);

        String authenticationSuccessJson = new Gson().toJson(authenticationSuccess);



        response.setStatus(202);
        response.getWriter().write(authenticationSuccessJson);
    }
}
