package com.server.domain.board.controller;

// import com.server.global.board.dto.BoardPatchDto;
import com.server.domain.board.dto.BoardPostDto;
import com.server.domain.board.entity.Board;
//import com.server.board.response.ErrorResponse;
import com.server.domain.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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
        board.setContent(boardDto.getContent());

        Board response = boardService.createBoard(board);

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    // 단일 질문 게시글 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") long boardId){

        Board response = boardService.findBoard(boardId);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 전체 질문 게시글 조회
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size){

        Page<Board> pageBoards = boardService.findBoards(page-1, size);
        List<Board> boards = pageBoards.getContent();

        return new ResponseEntity<>(boards, HttpStatus.OK);


    }

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
    // 단일 게시글 조회수 조회
//    @GetMapping("/{board-id}/views")
//    public Long getViews(@PathVariable("board-id") long boardId){
//
//        View views = new View();
//
//        return views.getCount();
//    }



}
