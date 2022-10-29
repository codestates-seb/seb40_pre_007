package com.server.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long boardId;
    private String content;
    private LocalDateTime updatedAt;
}
