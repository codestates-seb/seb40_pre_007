package com.server.domain.board.mapper;

import com.server.domain.answer.dto.AnswerResponseDto;
import com.server.domain.answer.entity.Answer;
import com.server.domain.board.dto.BoardPatchDto;
import com.server.domain.board.dto.BoardPostDto;
import com.server.domain.board.dto.BoardResponseDto;
import com.server.domain.board.entity.Board;
import org.mapstruct.Mapper;


import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostDtoToBoard(BoardPostDto boardPostDto);
    Board boardPatchDtoToBoard (BoardPatchDto boardPatchDto);
    List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards);

    default BoardResponseDto boardToBoardResponseDto(Board board) {
        List<Answer> answers = board.getAnswerList();

        BoardResponseDto boardResponseDto = new BoardResponseDto();
        boardResponseDto.setBoardId(board.getBoardId());
        boardResponseDto.setBoardStatus(board.getBoardStatus());
        boardResponseDto.setTitle(board.getTitle());
        boardResponseDto.setContent(board.getContent());
        boardResponseDto.setCreatedAt(board.getCreatedAt());
        boardResponseDto.setUpdatedAt(board.getUpdatedAt());
//        boardResponseDto.setAccountNickName(board.getAccount().getDisplayName());
        boardResponseDto.setAnswerList(answersToAnswerResponseDtos(answers));

        return boardResponseDto;
    };

    default List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers) {

        return answers
                .stream()
                .map(answer -> AnswerResponseDto
                        .builder()
                        .answerId(answer.getAnswerId())
                        .content(answer.getContent())
                        .updatedAt(answer.getUpdatedAt())
//                        .accountNickName(answer.getAccount().getDisplayName())
                        .build())
                .collect(Collectors.toList());
    }
}
