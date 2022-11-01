package com.server.domain.answer.dto;

import com.server.domain.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;

    @NotBlank(message = "내용을 입력하세요.")
    private String content;

    public Answer toAnswer() {
        Answer answer = new Answer();

        answer.setAnswerId(answerId);
        answer.setContent(content);

        return answer;
    }

}


