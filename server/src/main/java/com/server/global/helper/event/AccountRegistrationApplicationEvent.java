package com.server.global.helper.event;

import com.server.domain.account.entity.Account;
import lombok.Getter;

@Getter
public class AccountRegistrationApplicationEvent {

    private Account account;

    public AccountRegistrationApplicationEvent(Account account) {
        this.account = account;
    }
}
