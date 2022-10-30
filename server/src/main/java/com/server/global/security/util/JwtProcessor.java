package com.server.global.security.util;

import com.server.global.security.authentication.UserAccount;
import com.server.global.security.properties.JwtProperties;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class JwtProcessor {

    // 인증된 사용자에게 JWT 를 최초로 발급해주기 위한 JWT 생성 메서드
    public String createAuthJwtToken(UserAccount userAccount) {

        Map<String, Object> claims = createClaims(userAccount);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userAccount.getAccount().getId().toString())    // JWT 에 대한 제목 추가
                .setIssuedAt(new Date(System.currentTimeMillis()))    // JWT 발행일자 설정 (파라미터 타입 : java.util.Date)
                .setExpiration(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))    // JWT 만료 일시 지정 (파라미터 타입 : java.util.Date)
                .signWith(Keys.hmacShaKeyFor(JwtProperties.SECRET.getBytes()))    // 서명을 위한 Key(java.security.Key) 객체를 설정
                .compact();    // JWT 를 생성하고 직렬화
    }

    // Custom Claims : 주로 인증된 사용자와 관련된 정보를 추가
    public Map<String, Object> createClaims(UserAccount userAccount) {
        Map<String, Object> claims = new HashMap<>();

        List<String> roleList = userAccount.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        claims.put("username", userAccount.getUsername());
        claims.put("role", roleList);

        return claims;
    }

    public List<GrantedAuthority> getAuthorities(List<String> roleList) {
        return roleList.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    public Claims verifyJwtToken(String jwtToken) {
        return Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(JwtProperties.SECRET.getBytes()))    // JWT 서명(signature) 검증을 위한 Secret Key 얻기
                .build()
                .parseClaimsJws(jwtToken)
                .getBody();  // JWT 에서 Claims 를 파싱 -> 만약 정상적으로 파싱이 된다면, 서명 검증이 성공했다는 뜻이다.
    }

    // JWT 의 Bearer 부분 제거
    public String extractBearer(String jwtHeader) {
        int pos = jwtHeader.lastIndexOf(" ");
        return jwtHeader.substring(pos + 1);
    }
}
