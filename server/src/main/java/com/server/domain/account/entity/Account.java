package com.server.domain.account.entity;

import com.server.global.common.auditing.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@Entity
public class Account extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    @Column(nullable = false, length = 20)
    private String displayName;

    @Column(nullable = false, length = 40, unique = true)
    private String email;

    @Column(nullable = false, length = 100)
    private String password;

    @Column(length = 100)
    private String title;

    private String content;

    // Account 의 권한 정보 테이블과 매핑되는 정보
    // 컬랙션 타입의 필드는 @ElementCollection 애너테이션을 추가하여 별도의 엔티티 클래스를 만들지 않고도 매핑처리가 가능하다.
    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    private List<Role> roleList;

    public Account(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

}
