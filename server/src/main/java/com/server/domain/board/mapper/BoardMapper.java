package com.server.domain.board.mapper;

import com.server.domain.board.dto.BoardResponseDto;
import com.server.domain.board.entity.Board;
import org.mapstruct.Mapper;


import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    BoardResponseDto boardToBoardResponseDto(Board board);
    List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards);
}
