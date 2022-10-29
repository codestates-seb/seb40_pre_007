package com.server.domain.answer.service;

import com.server.domain.answer.entity.Answer;
import com.server.domain.answer.repository.AnswerRepository;
import com.server.domain.board.entity.Board;
import com.server.domain.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.lang.reflect.Member;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@Service //Spring Bean으로 만들어주는
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    private final BoardRepository boardRepository;

    //답변 생성 /DB에 저장 후, 되돌려 받는 것으로 변경 필요.
    public Answer createAnswer(Answer answer) {

        Board findBoard = verifiedBoardId(answer.getBoardId());

        return answerRepository.save(answer);
    }

    // 답변 수정 /DB에 저장 후, 되돌려 받는 것으로 변경 필요.
    public Answer updateAnswer(Answer answer) {

        Answer findAnswer = verifiedAnswerId(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(content ->findAnswer.setContent(content));

        Answer updatedAnswer = answerRepository.save(findAnswer);

        return updatedAnswer;
    }


    //답변 삭제
    public void deleteAnswer(long answerId) {
        Answer findAnswer = verifiedAnswerId(answerId);

        answerRepository.delete(findAnswer);
    }

    private Board verifiedBoardId(long boardId) {
        Board findBoard = boardRepository.findById(boardId)
                .orElseThrow(() -> new NoSuchElementException(("질문 게시물을 찾을 수 없습니다.")));

        return findBoard;
    }

    private Answer verifiedAnswerId(long answerId) {
        Answer findAnswer = answerRepository.findById(answerId)
                .orElseThrow(() -> new NoSuchElementException(("해당 답변을 찾을 수 없습니다.")));

        return findAnswer;
    }
}
