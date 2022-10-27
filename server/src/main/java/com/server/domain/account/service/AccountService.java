package com.server.domain.account.service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.entity.Role;
import com.server.domain.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final BCryptPasswordEncoder PasswordEncoder;

    @Transactional
    public Account createAccount(Account account) {
        String encodePassword = PasswordEncoder.encode(account.getPassword());
        account.setPassword(encodePassword);
        account.setRole(Role.USER);

        return accountRepository.save(account);
    }
}
