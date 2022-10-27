package com.server.global.security.config;

import com.server.global.security.filter.JwtAuthenticationFilter;
import com.server.global.security.handler.AccountAccessFailureHandler;
import com.server.global.security.handler.AccountAccessSuccessHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

// Spring Security 를 사용하기 위한 최소한의 보안 구성
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

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
                .addFilter(new JwtAuthenticationFilter(authenticationManager));

        http
                .authorizeRequests()
                .mvcMatchers(HttpMethod.POST, "/api/account").permitAll()
//                .mvcMatchers(HttpMethod.POST, "/api/login").permitAll()
//                .anyRequest().authenticated()
                .anyRequest().permitAll();

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

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() throws Exception {
        AuthenticationManager authenticationManager = authenticationConfiguration.getAuthenticationManager();

        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/login");
        jwtAuthenticationFilter.setAuthenticationSuccessHandler(new AccountAccessSuccessHandler());
        jwtAuthenticationFilter.setAuthenticationFailureHandler(new AccountAccessFailureHandler());

        return jwtAuthenticationFilter;
    }
}
