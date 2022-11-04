package com.server.domain.board.controller;

import com.server.domain.board.entity.Board;
import com.server.domain.board.repository.BoardRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class BoardPostTest {

    @Autowired
    BoardRepository boardRepository;

    @Test
    @DisplayName("board post test")
    void postBoard() {
        // given

        Board board = new Board();
        board.setTitle("테스트 제목");
        board.setContent("테스트 본문");

        Board saveBoard = boardRepository.save(board);

        assertNotNull(saveBoard);
        assertEquals(saveBoard.getTitle(),"테스트 제목");
        assertEquals(saveBoard.getContent(),"테스트 본문");
    }

    @Test
    @DisplayName("제목 입력 안했을때")
    void postBoardNoTitle(){
        // given
        Board board = new Board();
        board.setTitle(null);
        board.setContent("테스트 본문");

        assertThrows(RuntimeException.class,()->boardRepository.save(board));
    }

    @Test
    @DisplayName("본문 입력 안했을때")
    void postBoardNoContent(){
        // given
        Board board = new Board();
        board.setTitle("테스트 제목");
        board.setContent(null);

        assertThrows(RuntimeException.class,()->boardRepository.save(board));
    }

    @Test
    @DisplayName("제목이 100글자를 넘을때")
    void postBoardToMuchTitle(){
        // given
        Board board = new Board();
        board.setTitle("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
        board.setContent("테스트 본문");

        assertThrows(RuntimeException.class,()->boardRepository.save(board));
    }
}