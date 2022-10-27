package com.server.domain.account.dto;

import com.server.domain.account.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
public class PostAccountDto {

    private String displayName;
    private String email;
    private String password;

    public Account toAccount() {
        Account account = new Account();
        account.setDisplayName(displayName);
        account.setEmail(email);
        account.setPassword(password);

        return account;
    }

}
