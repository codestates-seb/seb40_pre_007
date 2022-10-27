package com.server.global.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.domain.account.entity.Account;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    // json 타입의 데이터로만 로그인을 진행
    private static final String CONTENT_TYPE = "application/json";

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
        Authentication authentication = this.getAuthenticationManager().authenticate(authenticationToken);

        return authentication;
    }
}
