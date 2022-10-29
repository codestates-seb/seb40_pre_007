/*
package com.server.domain.answer.service;

import com.server.domain.answer.entity.Answer;
import com.server.domain.answer.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.lang.reflect.Member;
import java.util.List;
import java.util.Optional;


@Service //Spring Bean으로 만들어주는
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    //답변 생성 /DB에 저장 후, 되돌려 받는 것으로 변경 필요.
    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    // 답변 수정 /DB에 저장 후, 되돌려 받는 것으로 변경 필요.
    public Answer updateAnswer(Answer answer) {
        Optional.ofNullable(answer.getContent());
        return answerRepository.save(findAnswer);
    }


    //답변 삭제
    public void deleteAnswer(long answerId) {
        answerRepository.delete(answerId);
    }
  }
*/