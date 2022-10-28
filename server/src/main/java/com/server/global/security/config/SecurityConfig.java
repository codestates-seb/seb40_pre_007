package com.server.global.security.config;

import com.server.global.security.filter.JwtAuthenticationFilter;
import com.server.global.security.filter.JwtAuthorizationFilter;
import com.server.global.security.handler.AccountAccessDeniedHandler;
import com.server.global.security.handler.AccountAuthenticationEntryPoint;
import com.server.global.security.util.JwtProcessor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

// Spring Security 를 사용하기 위한 최소한의 보안 구성
@Slf4j
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

    private final JwtProcessor jwtProcessor;
    private final AuthenticationConfiguration authenticationConfiguration;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationManager authenticationManager = authenticationConfiguration.getAuthenticationManager();

        http
                .csrf().disable()
                .formLogin().disable()    // formLogin 인증방법 비활성화
                .httpBasic().disable()    // httpBasic 인증방법 비활성화
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);    // 세션 상태를 유지하지 않음

        http
                .addFilter(new JwtAuthenticationFilter(authenticationManager, jwtProcessor))
                .addFilter(new JwtAuthorizationFilter(authenticationManager, jwtProcessor));

        http
                .authorizeRequests()
                .mvcMatchers(HttpMethod.POST, "/api/account").permitAll()
//                .mvcMatchers(HttpMethod.POST, "/api/login").permitAll()
//                .anyRequest().authenticated()
                .anyRequest().permitAll();

        http
                .exceptionHandling()
                .accessDeniedHandler(new AccountAccessDeniedHandler())
                .authenticationEntryPoint(new AccountAuthenticationEntryPoint());

        return http.build();
    }

    // BCryptPasswordEncoder 등록
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web
                .ignoring()
                .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    // AuthenticationManager 등록
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
