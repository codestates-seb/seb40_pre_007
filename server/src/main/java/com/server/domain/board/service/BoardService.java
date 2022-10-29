package com.server.domain.board.service;

import com.server.domain.board.entity.Board;
import com.server.global.exception.BusinessLogicException;
import com.server.global.exception.ExceptionCode;
import com.server.domain.board.repository.BoardRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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


    // 전체 질문 게시글 조회
    public Page<Board> findBoards(int page, int size){ // 전체 질문 게시글에 pagenation

        // sort 수정 필요!
        Page<Board> findAllBoard = boardRepository.findAll(
                PageRequest.of(page, size, Sort.by("boardId").descending()));

        return findAllBoard;
    }

    // 질문 게시글 수정
    public Board updateBoard(Board board){
        Board findBoard = findVerifiedBoard(board.getBoardId()); // 수정 요청한 질문이 DB에 없으면 에러!


        Optional.ofNullable(board.getTitle()) //제목수정
                .ifPresent(title->findBoard.setTitle(title));
        Optional.ofNullable(board.getContent()) //내용수정
                .ifPresent(content->findBoard.setContent(content));

        return findBoard;
    }



    public Board findVerifiedBoard(long boardId){
        Optional<Board> optionalBoard =
                boardRepository.findById(boardId);
        Board findBoard =
                optionalBoard.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));

        return findBoard;
    }


    private void VerifiedNoBoard(Page<Board> findAllBoard){ // status가 QUESTION_EXIST 인 List 데이터가 0이면 예외 발생
        if (findAllBoard.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        }
    }


    // 단일 질문 게시글 삭제
    public void deleteBoard(long boardId) {
        Board findBoard = findVerifiedBoard(boardId);

        boardRepository.delete(findBoard);

    }
}
