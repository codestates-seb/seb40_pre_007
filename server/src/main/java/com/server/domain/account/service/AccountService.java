package com.server.domain.account.service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.helper.event.AccountRegistrationApplicationEvent;
import com.server.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
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
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final ApplicationEventPublisher publisher;

    @Transactional
    public Account createAccount(Account account) {

        verifyExistsEmail(account.getEmail());

        String encodePassword = passwordEncoder.encode(account.getPassword());
        account.setPassword(encodePassword);
//        account.setRoles();

        List<String> roles = customAuthorityUtils.createRoles(account.getEmail());
        account.setRoles(roles);

        Account savedAccount = accountRepository.save(account);

        publisher.publishEvent(new AccountRegistrationApplicationEvent(savedAccount));

        return savedAccount;
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Account updateAccount(Account account) {
        // DTO 로 전달받은 요청으로 DB 에서 Account 조회
        Account findAccount = findVerifiedAcount(account.getId());

        // Account 에 담긴 요소를 확인하여 수정사항이 존재하면 Setter 로 값 저장
        Optional.ofNullable(account.getPassword())
                .ifPresent(password -> findAccount.setPassword(passwordEncoder.encode(account.getPassword())));
        Optional.ofNullable(account.getDisplayName())
                .ifPresent(displayname -> findAccount.setDisplayName(displayname));
        Optional.ofNullable(account.getTitle())
                .ifPresent(title -> findAccount.setTitle(title));
        Optional.ofNullable(account.getContent())
                .ifPresent(content -> findAccount.setContent(content));

        return findAccount;
    }

    private void verifyExistsEmail(String email) {
        Optional<Account> account = accountRepository.findByEmail(email);
        if (account.isPresent()) {
            throw new RuntimeException("해당 이메일을 가진 회원이 존재합니다.");
        }
    }

    private Account findVerifiedAcount(long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new NoSuchElementException("회원을 찾을 수 없습니다."));

        return account;
    }
}
