package com.server.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class AnswerResponseDto {

    private long answerId;
    private String content;
    private LocalDateTime updatedAt;
    private String accountNickName;
}
