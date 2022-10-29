/*package com.server.domain.answer.repository;

import com.server.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    //List<Answer> findAnswer(long boardId);
    Optional<Answer> findAnswer(long answer);
    void delete(long answerId);
}
*/