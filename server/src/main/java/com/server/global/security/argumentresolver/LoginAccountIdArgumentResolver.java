package com.server.global.security.argumentresolver;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.NoSuchElementException;
import java.util.Optional;

@RequiredArgsConstructor
public class LoginAccountIdArgumentResolver implements HandlerMethodArgumentResolver {

    private final AccountRepository accountRepository;

    // 어떤 파라미터에 대해 작업을 수행할 지 정의
    @Override
    public boolean supportsParameter(MethodParameter parameter) {

        boolean hasLoginAccountIdAnnotation = parameter.hasParameterAnnotation(LoginAccountId.class);
        boolean hasLongType = Long.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAccountIdAnnotation && hasLongType;

    }

    // 해당 파라미어에 대한 실질적인 로직을 처리
    @Override
    public Object resolveArgument(MethodParameter parameter,
                                  ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest,
                                  WebDataBinderFactory binderFactory) throws Exception {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal == null) {
            return new NoSuchElementException();
        }

        String accountEmail = principal.toString();
        Account findAccount = accountRepository.findByEmail(accountEmail)
                .orElseThrow(() -> new NoSuchElementException());

        return findAccount.getId();
    }
}
