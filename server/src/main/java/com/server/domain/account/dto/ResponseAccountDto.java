package com.server.domain.account.dto;

import com.server.domain.account.entity.Account;

public class ResponseAccountDto {

    private String displayName;
    private String email;

    public ResponseAccountDto(Account account) {
        this.displayName = account.getDisplayName();
        this.email = account.getEmail();
    }
}
