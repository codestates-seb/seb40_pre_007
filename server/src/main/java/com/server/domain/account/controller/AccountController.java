package com.server.domain.account.controller;

import com.server.domain.account.dto.PostAccountDto;
import com.server.domain.account.entity.Account;
import com.server.domain.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public String postAccount(@RequestBody PostAccountDto postAccountDto) throws IOException {
        Account account = postAccountDto.toAccount();
        accountService.createAccount(account);

        return "success account created";
    }
}
