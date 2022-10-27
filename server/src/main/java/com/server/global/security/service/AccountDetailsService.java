package com.server.global.security.service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.security.authentication.UserAccount;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Account findAccount = accountRepository.findByEmailWithRole(username)
                .orElseThrow(() -> new UsernameNotFoundException("해당 Email을 갖는 Account를 찾을 수 없습니다."));

        return new UserAccount(findAccount);
    }
}
