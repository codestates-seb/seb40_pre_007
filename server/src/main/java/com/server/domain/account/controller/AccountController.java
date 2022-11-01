package com.server.domain.account.controller;

import com.server.domain.account.dto.PatchAccontDto;
import com.server.domain.account.dto.PostAccountDto;
import com.server.domain.account.entity.Account;
import com.server.domain.account.service.AccountService;
import com.server.global.security.argumentresolver.LoginAccount;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public String postAccount(@Valid @RequestBody PostAccountDto postAccountDto) throws Exception {
        Account account = postAccountDto.toAccount();
        accountService.createAccount(account);

        return "success account created";
    }

    @PatchMapping("/profile")
    public ResponseEntity<Account> patchAccount(@LoginAccount Account account,
                                                @RequestBody PatchAccontDto patchAccontDto) throws IOException{

        patchAccontDto.setId(account.getId());

        Account dtoToAccount = patchAccontDto.toAccount();

        Account savedAccount = accountService.updateAccount(dtoToAccount);

        return new ResponseEntity<>(savedAccount, HttpStatus.OK);
    }
}
