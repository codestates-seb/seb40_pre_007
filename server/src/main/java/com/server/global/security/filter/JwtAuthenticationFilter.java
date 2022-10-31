package com.server.global.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.domain.account.entity.Account;
import com.server.global.security.dto.LoginDto;
import com.server.global.security.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    @SneakyThrows

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        // 클라이언트에서 전송한 Username 과 Password 를 DTO 클래스로 역직렬화하기 위한 objectMapper 인스턴스 생성
        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);


        // UsernamePasswordAuthenticationToken : Authentication 을 구현한 클래스로, 아직 인증되지 않았다.
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

        // 인증 처리를 총괄 : authenticationManager  (filter 의 인증처리 위임)
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        Account account = (Account) authResult.getPrincipal();    // Account 객체를 얻는다.

        String accessToken = delegateAccessToken(account);    // accessToken 생성

        response.setHeader("Authorization", "Bearer " + accessToken);

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

    // AccessToken 을 실질적으로 생성하는 로직
    private String delegateAccessToken(Account account) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", account.getEmail());
        claims.put("roles", account.getRoles());

        String subject = account.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }


}
