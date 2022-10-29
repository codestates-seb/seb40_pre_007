package com.server.domain.account.service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.entity.Role;
import com.server.domain.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public Account createAccount(Account account) {
        String encodePassword = bCryptPasswordEncoder.encode(account.getPassword());
        account.setPassword(encodePassword);
        account.setRoleList(List.of(Role.USER));

        return accountRepository.save(account);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Account updateAccount(Account account) {
        // DTO 로 전달받은 요청으로 DB 에서 Account 조회
        Account findAccount = findVerifiedAcount(account.getId());

        // Account 에 담긴 요소를 확인하여 수정사항이 존재하면 Setter 로 값 저장
        Optional.ofNullable(account.getPassword())
                .ifPresent(password -> findAccount.setPassword(bCryptPasswordEncoder.encode(account.getPassword())));
        Optional.ofNullable(account.getDisplayName())
                .ifPresent(displayname -> findAccount.setDisplayName(displayname));
        Optional.ofNullable(account.getTitle())
                .ifPresent(title -> findAccount.setTitle(title));
        Optional.ofNullable(account.getContent())
                .ifPresent(content -> findAccount.setContent(content));

        return findAccount;
    }

    private Account findVerifiedAcount(long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new NoSuchElementException("회원을 찾을 수 없습니다."));

        return account;
    }
}
