package com.server.domain.account.dto;

import com.server.domain.account.entity.Account;
import lombok.Data;

@Data
public class PatchAccontDto {

    private Long id;
    private String password;
    private String displayName;
    private String title;
    private String content;

    public Account toAccount() {
        Account account = new Account();
        account.setId(id);
        account.setPassword(password);
        account.setDisplayName(displayName);
        account.setTitle(title);
        account.setContent(content);

        return account;
    }
}
