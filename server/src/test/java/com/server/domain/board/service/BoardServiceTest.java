package com.server.domain.board.service;

import com.server.domain.account.entity.Account;
import com.server.domain.board.entity.Board;
import com.server.domain.board.repository.BoardRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class BoardServiceTest {

    @Autowired
    BoardRepository boardRepository;
    BoardService boardService;

    private String title;
    private String content;

    @AfterEach
    public void cleanup(){
        boardRepository.deleteAll();
    }
    @Test
    @DisplayName("게시글저장")
    public void 게시글저장(){
        // given

        Account account = new Account();
        account.setDisplayName("김코딩");
        account.setEmail("kimcd@gmail.com");
        account.setPassword("rlazheld123!");

        Board board = new Board();
        board.setTitle("테스트제목");
        board.setContent("테스트본문");

        boardService.createBoard(board,account);

        String expected ="테스트제목";
        String actual = board.getTitle();

        assertEquals(expected, actual);

    }






}