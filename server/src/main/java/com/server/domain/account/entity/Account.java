package com.server.domain.account.entity;

import com.server.global.common.auditing.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "ACCOUNTS")
public class Account extends BaseTimeEntity {

    @Id @GeneratedValue
    @Column(name = "account_id")
    private Long id;

    @Column(nullable = false, length = 20)
    private String displayName;

    @Column(nullable = false, length = 40, unique = true)
    private String email;

    @Column(nullable = false, length = 30)
    private String password;

    @Column(length = 100)
    private String title;

    private String content;

    @Enumerated(EnumType.STRING)
    private Role role;

}
