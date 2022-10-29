/*package com.server.domain.answer.controller;

import com.server.domain.answer.dto.AnswerPatchDto;
import com.server.domain.answer.dto.AnswerPostDto;
import com.server.domain.answer.entity.Answer;
import com.server.domain.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.mapstruct.Mapper;
import com.server.domain.answer.mapper.AnswerMapper;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    //DI 적용
    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

*/
/*
    // 답변 생성
    @PostMapping("/{board-id}/answers")
    public String postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto,
                                     @PathVariable("board-id") @Positive long boardId) {

        answerPostDto.setBoardId(boardId);
        Answer answer = answerPostDto.toAnswer();

        return "success answer created";
    }

    // 답변 수정
    @PatchMapping("/answers/{answers-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @PathVariable("answers-id") @Positive long answerId) {

        answerPatchDto.setAnswerId(answerId);

        return new ResponseEntity<>(answerPatchDto, HttpStatus.OK);
    }



    //답변 삭제
    @DeleteMapping("/answers/{answers-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answers-id") long answerId) {

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}*/
