package com.server.global.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.server.domain.account.entity.Account;
import com.server.global.exception.dto.ErrorResponse;
import com.server.global.security.authentication.UserAccount;
import com.server.global.security.properties.JwtProperties;
import com.server.global.security.util.JwtProcessor;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtProcessor jwtProcessor;

    // json 타입의 데이터로만 로그인을  진행
    private static final String CONTENT_TYPE = "application/json";


    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,
                                   JwtProcessor jwtProcessor) {
        this.setFilterProcessesUrl("/api/login");
        this.authenticationManager = authenticationManager;
        this.jwtProcessor = jwtProcessor;
    }

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {

        if (request.getContentType() == null || !request.getContentType().equals(CONTENT_TYPE)) {
            throw new AuthenticationServiceException("Authentication Content-Type is not supported" + request.getContentType());
        }

        // json -> 자바 객체
        ObjectMapper objectMapper = new ObjectMapper();
        Account account = objectMapper.readValue(request.getInputStream(), Account.class);

        // 요청에서 username(email)과 password 를 꺼내어 UsernamePasswordAuthenticationToken 이라는 Authentication 구현체를 만든다. (아직 인증X)
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(account.getEmail(), account.getPassword());

        // 인증이 되지않은 Authentication 을 인증처리를 총괄하는 AuthenticationManager 의 authenticate() 메서드를 호출하여 넘기고,
        // AuthenticationManager 의 구현체는 ProviderManager 이다.
        // ProviderManager 는 인증 작업을 총괄할 뿐이기에 직접 인증을 처리하는 것이 아니라 AuthenticationProvider 에게 인증 처리작업을 넘기고,
        // Provider 에서 실제 인증과정을 처리한 뒤, 인증된 Authentication 을 반환한다.
        // 반환된 Authentication 은 인증에 성공한 사용자의 정보(Principal, Credential, GrantedAuthorities) 를 가지고 있다.
        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        return authentication;
    }

    // AccountAccessSuccess Handler 역할을 하는 메서드
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        UserAccount userAccount = (UserAccount) authResult.getPrincipal();

        String jwtToken = jwtProcessor.createAuthJwtToken(userAccount);

        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + " " + jwtToken);
        response.getWriter().write("로그인에 성공하였습니다.");
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request,
                                              HttpServletResponse response,
                                              AuthenticationException failed) throws IOException, ServletException {
        ErrorResponse authenticationEx =
                new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "FailToAuthentication",
                        "인증에 실패하였습니다.");

        String authenticationExJson = new Gson().toJson(authenticationEx);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(authenticationExJson);
    }
}