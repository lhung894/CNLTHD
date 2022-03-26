package com.example.demo.Repository;

import com.example.demo.Entity.LuongEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LuongRepository extends JpaRepository<LuongEntity, Long> {
    @Query(value = "SELECT u FROM LuongEntity u WHERE u.status = 1")
    List<LuongEntity> GetAllActive();

    @Query(value = "SELECT l FROM LuongEntity l WHERE l.status = 1 " +
            "AND FUNCTION('MONTH',l.ngayTinhLuong) = ?1 AND FUNCTION('YEAR',l.ngayTinhLuong) = ?2")
    List<LuongEntity> GetLuongByTime(int month, int year);
}
