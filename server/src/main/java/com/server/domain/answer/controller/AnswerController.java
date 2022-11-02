package com.server.domain.answer.controller;

import com.server.domain.account.entity.Account;
import com.server.domain.answer.dto.AnswerPatchDto;
import com.server.domain.answer.dto.AnswerPostDto;
import com.server.domain.answer.entity.Answer;
import com.server.domain.answer.mapper.AnswerMapper;
import com.server.domain.answer.service.AnswerService;
import com.server.domain.board.dto.SingleResponseDto;
import com.server.global.security.argumentresolver.LoginAccount;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.mapstruct.Mapper;
//import com.server.domain.answer.mapper.AnswerMapper;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;


    // 답변 생성
    @PostMapping("/{board-id}/answers")
    public String postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto,
                             @PathVariable("board-id") @Positive long boardId,
                             @LoginAccount Account account) {

        Answer answer = answerPostDto.toAnswer();

        Answer savedAnswer = answerService.createAnswer(answer, boardId, account);

        return "success answer created";
    }

    // 답변 수정
    @PatchMapping("/answers/{answers-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @PathVariable("answers-id") @Positive long answerId,
                                      @LoginAccount Account account) {

        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerPatchDto.toAnswer();

        Answer updatedAnswer = answerService.updateAnswer(answer, account);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(updatedAnswer)),
                HttpStatus.OK);
    }



    //답변 삭제
    @DeleteMapping("/answers/{answers-id}")
    public String deleteAnswer(@PathVariable("answers-id") @Positive long answerId,
                                       @LoginAccount Account account) {

        answerService.deleteAnswer(answerId, account);

        return "success answer deleted";
    }
}
