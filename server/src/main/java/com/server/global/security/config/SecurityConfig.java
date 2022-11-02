package com.server.global.security.config;

import com.server.global.security.filter.JwtAuthenticationFilter;
import com.server.global.security.filter.JwtVerificationFilter;
import com.server.global.security.handler.AccountAccessDeniedHandler;
import com.server.global.security.handler.AccountAuthenticationEntryPoint;
import com.server.global.security.handler.AccountAuthenticationFailureHandler;
import com.server.global.security.handler.AccountAuthenticationSuccessHandler;
import com.server.global.security.jwt.JwtTokenizer;
import com.server.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@RequiredArgsConstructor
@Configuration
public class SecurityConfig {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new AccountAuthenticationEntryPoint())  // 추가
                .accessDeniedHandler(new AccountAccessDeniedHandler())            // 추가
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/accounts").permitAll()
//                        .antMatchers(HttpMethod.PATCH, "/*/accounts/**").hasRole("USER")
//                        .antMatchers(HttpMethod.DELETE, "/*/accounts/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/boards").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/boards/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/boards").permitAll()
                        .antMatchers(HttpMethod.GET, "/*/boards/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/boards/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/*/answers").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/answers/**").hasRole("USER")
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE", "OPTIONS"));
        configuration.addExposedHeader("Authorization");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/api/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new AccountAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new AccountAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
