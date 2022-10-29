package com.server.domain.board.repository;

import com.server.domain.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {
    Optional<Board> findByTitle(String title);

    Page<Board> findAllByBoardStatus(Pageable pageable,Board.BoardStatus boardStatus); // 삭제된 글 제외하고 전체 질문 가져옴

}
