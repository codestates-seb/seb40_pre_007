package com.server.domain.account.dto;

import com.server.domain.account.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class PostAccountDto {

    @NotBlank
    private String displayName;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    public Account toAccount() {
        Account account = new Account();
        account.setDisplayName(displayName);
        account.setEmail(email);
        account.setPassword(password);

        return account;
    }

}
