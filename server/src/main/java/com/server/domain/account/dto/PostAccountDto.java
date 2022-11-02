package com.server.domain.account.dto;

import com.server.domain.account.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@AllArgsConstructor
public class PostAccountDto {

    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String displayName;

    @NotBlank
    @Email(message = "올바른 이메일 양식이 아닙니다.")
    private String email;

    @NotBlank
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{8,20}$",
             message = "비밀번호는 8자리 이상 20자리 이하로 구성되어야 하며, 영어 대소문자, 숫자, 특수문자가 최소 1개 이상 포함되어야 합니다.")
    private String password;

    public Account toAccount() {
        Account account = new Account();
        account.setDisplayName(displayName);
        account.setEmail(email);
        account.setPassword(password);

        return account;
    }

}
