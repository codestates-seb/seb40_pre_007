package com.server.global.security.service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.NoSuchElementException;
import java.util.Optional;

// DB 에서 사용자 크레덴셜을 조회하여 AuthenticationManager 에게 전달하는 Custom UserDetailsService
@Component
@RequiredArgsConstructor
public class AccountDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;
    private final CustomAuthorityUtils authorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Account> optionalAccount = accountRepository.findByEmail(username);
        Account findAccount = optionalAccount.orElseThrow(() -> new NoSuchElementException());

        return new AccountDetails(findAccount);
    }

    private final class AccountDetails extends Account implements UserDetails {

        AccountDetails(Account account) {
            setId(account.getId());
            setEmail(account.getEmail());
            setPassword(account.getPassword());
            setRoles(account.getRoles());
        }
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }

}
