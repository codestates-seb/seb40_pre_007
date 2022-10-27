package com.server.board.service;

import com.server.board.entity.Board;
import com.server.board.exception.BusinessLogicException;
import com.server.board.exception.ExceptionCode;
import com.server.board.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BoardService {

    private BoardRepository boardRepository;

    // BoardRepository DI
    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    // 질문 게시글 생성
    public Board createBoard(Board board){

        return boardRepository.save(board);

    }



    // 단일 질문 게시글 조회
    public Board findBoard(long boardId){

        // board 객체는 DB에 저장 후, 되돌려 받아야 하므로 변경 필요!!
        return findVerifiedBoard(boardId);
    }


    public Board findVerifiedBoard(long boardId){
        Optional<Board> optionalBoard =
                boardRepository.findById(boardId);
        Board findBoard =
                optionalBoard.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ACCOUNT_NOT_FOUND));

        return findBoard;
    }

//    // 질문 게시글 수정
//    public Board updateBoard(long boardId){
//
//        // db 연결 후 수정 필요!!
//        Board board =
//                new Board(boardId,"title","content",1);
//        return board;
//    }
//
//    // 전체 질문 게시글 조회
//    public List<Board> findBoards(){
//
//
//        // db 연결 후 수정 필요!!
//        List<Board> boards = List.of(
//                new Board(1, "title","content",1)
//        );
//
//        return boards;
//    }
//
//    // 단일 질문 게시글 삭제
//    public void deleteBoard(long boardId){
//
//    }
}
