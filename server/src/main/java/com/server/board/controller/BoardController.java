package com.server.board.controller;

// import com.server.global.board.dto.BoardPatchDto;

import com.server.board.dto.BoardPostDto;
import com.server.board.entity.Board;
import com.server.board.service.BoardService;
import com.server.domain.account.entity.Account;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/boards")
@Validated
@Slf4j
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    // 질문 게시글 작성
    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto boardDto)throws Exception{

        Board board = boardDto.toBoard();
        Board response = boardService.createBoard(board);

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    // 단일 게시글 조회수 조회
//    @GetMapping("/{board-id}/views")
//    public Long getViews(@PathVariable("board-id") long boardId){
//
//        View views = new View();
//
//        return views.getCount();
//    }

    // 단일 질문 게시글 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") long boardId){

        Board response = boardService.findBoard(boardId);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

//    // 전체 질문 게시글 조회
//    @GetMapping("/question")
//    public ResponseEntity getBoards(){
//
//        List<Board> response = boardService.findBoards();
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    // 질문 게시글 수정
//    @PatchMapping("/{board-id}")
//    public ResponseEntity patchBoard(@PathVariable("board-id") long boardId,
//                             @Valid @RequestBody BoardPatchDto boardPatchDto){
//        Board board = new Board();
//        board.setBoardId(boardPatchDto.getBoardId());
//        board.setTitle(boardPatchDto.getTitle());
//        board.setContent(boardPatchDto.getContent());
//
//        Board response = boardService.updateBoard(board);
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @DeleteMapping("/{board-id}")
//    public ResponseEntity deleteBoard(
//            @PathVariable("board-id") @Positive long boardId){
//        boardService.deleteBoard(boardId);
//
//        return new ResponseEntity(HttpStatus.NO_CONTENT);
//    }



}
