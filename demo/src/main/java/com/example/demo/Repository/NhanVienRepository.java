package com.example.demo.Repository;

import com.example.demo.Entity.NhanVienEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NhanVienRepository extends JpaRepository<NhanVienEntity, Long> {
    @Query(value = "SELECT u FROM NhanVienEntity u WHERE u.status = 1")
    List<NhanVienEntity> GetAllActive();
}
