package com.server.domain.answer.mapper;

import com.server.domain.answer.dto.AnswerPatchDto;
import com.server.domain.answer.dto.AnswerPostDto;
import com.server.domain.answer.dto.AnswerResponseDto;
import com.server.domain.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
