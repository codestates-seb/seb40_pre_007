package com.server.account.repository;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

/*
   데이터 액세스 계층을 테스트, AccountRepository 기능을 정상적으로 사용하기 위한 configuration 을 Spring 이 자동으로 해준다.
 */
@DataJpaTest
public class AccountRepositoryTest {

    @Autowired
    private AccountRepository accountRepository;

    @Test
    void saveAccountTest() {
        // given
        Account account = new Account("hyeongiii@gmail.com", "이가형", "loveI1E5!");

        // when
        Account savedAccount = accountRepository.save(account);

        // then
        assertNotNull(savedAccount);
        assertTrue(account.getDisplayName().equals(savedAccount.getDisplayName()));
        assertTrue(account.getEmail().equals(savedAccount.getEmail()));
        assertTrue(account.getPassword().equals(savedAccount.getPassword()));
    }

    @Test
    void findByEmailTest() {
        // given
        Account account = new Account("hyeongiii@gmail.com", "이가형", "loveI1E5!");

        // when
        accountRepository.save(account);
        Optional<Account> findAccount = accountRepository.findByEmail(account.getEmail());

        // then
        assertTrue(findAccount.isPresent());
        assertTrue(account.getEmail().equals(findAccount.get().getEmail()));
    }
}
