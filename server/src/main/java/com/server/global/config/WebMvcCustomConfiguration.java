package com.server.global.config;

import com.server.domain.account.repository.AccountRepository;
import com.server.global.security.argumentresolver.LoginAccountIdArgumentResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

// WebMvcConfigurer 구현 클래스를 사용해서 커스텀 HandlerMethodArgumentResolver 등록
@Configuration
@RequiredArgsConstructor
public class WebMvcCustomConfiguration implements WebMvcConfigurer {

    private final AccountRepository accountRepository;

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new LoginAccountIdArgumentResolver(accountRepository));
    }
}
