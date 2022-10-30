package com.server.global.security.filter;

import com.server.global.security.authentication.Principal;
import com.server.global.security.properties.JwtProperties;
import com.server.global.security.util.JwtProcessor;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
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
import java.security.SignatureException;
import java.util.List;

// 클라이언트 측에서 전송된 request header 에 포함된 JWT 검증 작업을 수행하는 Filter
// BasicAuthenticationFilter : request 당 한번만 실행되는 OncePerRequestFilter 를 확장한 인터페이스
// 인증과 관련된 Filter 는 성공인지 실패인지 단 한번만 판단하면 되기 때문에 해당 필터를 이용하는 것이 적절하다.
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

        /*
        JWT 가 Authorization header 에 포함되지 않았다면, JWT 자격 증명이 필요하지 않은 리소스에 대한 요청이라고 판단하여 다음 Filter 로 처리를 넘긴다.

        JWT 자격 증명이 필요한 리소스 요청인데, JWT 가 포함되지 않았더라도
        Authentication 이 SecurityContext 에 저장되지 않은 상태이기 때문에 다른 Security Filter 를 거쳐 Exception 을 던진다.
         */
        // Header "Authorization" 를 jwtHeader 에 담아준다.
        String jwtHeader = request.getHeader(JwtProperties.HEADER_STRING);
        // if 문의 조건에 부합하면 Filter 가 동작을 수행하지 않고 바로 종료된다.
        if (jwtHeader == null || !jwtHeader.startsWith(JwtProperties.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }

        try {
            // 메서드를 이용하여 Bearer 부분이 제거된 JWS(JSON Web Token Signed) 을 생성 = jwtToken
            String jwtToken = jwtProcessor.extractBearer(jwtHeader);
            // JWT 에서 Claims 를 파싱한다. (내부적으로 서명(Signature) 검증에 성공했다.)
            // Claims : 주체가 무엇인지를 표현하는 이름과 값의 쌍으로, 사용자의 속성을 저장한다.
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

        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        // Security Filter 를 호출한다.
        chain.doFilter(request, response);
    }
}
