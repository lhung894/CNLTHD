package com.example.demo.Repository;

import com.example.demo.Entity.NhanVienDuAnEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NhanVienDuAnRepository extends JpaRepository<NhanVienDuAnEntity, Long> {
    @Query(value = "SELECT u FROM NhanVienDuAnEntity u WHERE u.status = 1")
    List<NhanVienDuAnEntity> GetAllActive();

    @Query(value = "SELECT nvda FROM NhanVienDuAnEntity nvda " +
            "WHERE nvda.nhanVien.nhanVienId = ?1 AND nvda.status = 1")
    List<NhanVienDuAnEntity> GetNVDAByNhanVien(Long id);
}
