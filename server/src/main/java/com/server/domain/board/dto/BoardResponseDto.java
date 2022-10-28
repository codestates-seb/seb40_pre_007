package com.server.domain.board.dto;


import com.server.domain.account.entity.Account;
import com.server.domain.board.entity.Board;
import com.server.domain.board.service.BoardService;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.constraints.Positive;
import java.util.List;

@Builder
@Getter
public class BoardResponseDto {
    private long boardId;
    private String title;
    private String content;
    private long views;
    private Board.BoardStatus boardStatus;


    public String getBoardStatus(){
        return boardStatus.getStatus();
    }

}
