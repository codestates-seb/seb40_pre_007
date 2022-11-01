package com.server.domain.board.controller;

import com.server.domain.account.entity.Account;
import com.server.domain.board.dto.*;
import com.server.domain.board.entity.Board;
import com.server.domain.board.mapper.BoardMapper;
import com.server.domain.board.service.BoardService;
import com.server.global.security.argumentresolver.LoginAccount;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
    private final BoardMapper mapper;

    // 질문 게시글 작성
    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto boardDto,
                                    @LoginAccount Account account)throws Exception{

        Board board = mapper.boardPostDtoToBoard(boardDto);

        Board savedBoard = boardService.createBoard(board, account);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponseDto(savedBoard)), HttpStatus.CREATED);

    }

    // 단일 질문 게시글 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive long boardId){

        Board board = boardService.findBoard(boardId);
        return new ResponseEntity(new SingleResponseDto<>(mapper.boardToBoardResponseDto(board))
        ,HttpStatus.OK);

    }

    /// 전체 질문 게시글 조회
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {

        Page<Board> pageBoards = boardService.findBoards(page - 1, size);
        List<Board> boards = pageBoards.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.boardsToBoardResponseDto(boards), pageBoards), HttpStatus.OK);
    }


    // 게시글 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive long boardId,
                                     @Valid @RequestBody BoardPatchDto boardPatchDto,
                                     @LoginAccount Account account){

        boardPatchDto.setBoardId(boardId);

        Board board = mapper.boardPatchDtoToBoard(boardPatchDto);

        Board savedBoard = boardService.updateBoard(board, account);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponseDto(savedBoard)),
                HttpStatus.OK);
    }

    @DeleteMapping("/{board-id}")
    public String deleteBoard(@PathVariable("board-id") @Positive long boardId,
                                      @LoginAccount Account account){

        boardService.deleteBoard(boardId, account);

        return "success board deleted";
    }
}
