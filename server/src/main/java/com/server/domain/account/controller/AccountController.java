package com.server.domain.account.controller;

import com.server.domain.account.dto.PostAccountDto;
import com.server.domain.account.entity.Account;
import com.server.domain.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public String postAccount(@ModelAttribute PostAccountDto postAccountDto) throws IOException {
        Account account = postAccountDto.toAccount();
        accountService.createAccount(account);

        return "success account created";
    }
}
