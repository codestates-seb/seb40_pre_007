package com.server.global.security.filter;

import com.server.global.security.authentication.Principal;
import com.server.global.security.properties.JwtProperties;
import com.server.global.security.util.JwtProcessor;
import io.jsonwebtoken.Claims;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private final JwtProcessor jwtProcessor;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager,
                                  JwtProcessor jwtProcessor) {
        super(authenticationManager);
        this.jwtProcessor = jwtProcessor;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) throws IOException, ServletException {
        String jwtHeader = request.getHeader(JwtProperties.HEADER_STRING);

        // if 문의 조건에 부합하면 Filter 가 동작을 수행하지 않고 바로 종료된다.
        if (jwtHeader == null || !jwtHeader.startsWith(JwtProperties.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }

        // 메서드를 이용하여 Bearer 부분이 제거된 JWS(JSON Web Token Signed) 을 생성 = jwtToken
        String jwtToken = jwtProcessor.extractBearer(jwtHeader);
        // JWT 에서 Claims 를 파싱한다. (내부적으로 서명(Signature) 검증에 성공했다.)
        Claims claims = jwtProcessor.verifyJwtToken(jwtToken);

        // JWT 에서 파싱한 Claims 로부터 authentication 을 위한 List<GrantedAuthority>, username 을 얻는다.
        Long id = Long.valueOf(claims.getSubject());
        List<GrantedAuthority> authorities = jwtProcessor.getAuthorities((List<String>) claims.get("role"));
        Principal principal = new Principal(id, (String) claims.get("username"));

        // Authentication 생성
        Authentication authentication =
                new UsernamePasswordAuthenticationToken(principal, null, authorities);

        // Authentication 을 파라미터로 넘겨줌으로써, AuthorizationFilter 는 SecurityContextHolder 로부터 authentication 을 획득한다.
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Security Filter 를 호출한다.
        chain.doFilter(request, response);
    }
}
