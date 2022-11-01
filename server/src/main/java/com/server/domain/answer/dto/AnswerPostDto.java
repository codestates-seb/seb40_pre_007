package com.server.domain.answer.dto;

import com.server.domain.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerPostDto {

    @NotBlank(message = "내용을 입력하세요.")
    private String content;


    public Answer toAnswer() {
        Answer answer = new Answer();
        answer.setContent(content);

        return answer;
    }
}
