package com.server.domain.board.dto;


import com.server.domain.account.entity.Account;
import com.server.domain.answer.dto.AnswerResponseDto;
import com.server.domain.answer.entity.Answer;
import com.server.domain.board.entity.Board;
import com.server.domain.board.service.BoardService;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class BoardResponseDto {
    private long boardId;
    private String title;
    private String content;
    private String accountNickName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Board.BoardStatus boardStatus;

    private List<AnswerResponseDto> answerList;


    public String getBoardStatus(){
        return boardStatus.getStatus();
    }

    /*
    추후에 mapStructure 사용하지 않기 위해 구현해 놓은 코드
     */
//    public BoardResponseDto toBoard(Board board){
//        boardId = board.getBoardId();
//        title = board.getTitle();
//        content = board.getContent();
//        boardStatus = board.getBoardStatus();
//        BoardResponseDto boardResponseDto =
//                new BoardResponseDto(boardId,title, content, boardStatus);
//
//        return boardResponseDto;
//    }

}
