package com.example.demo.Repository;

import com.example.demo.Entity.NhanVienDuAnEntity;
import com.example.demo.Entity.NhanVienEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface NhanVienDuAnRepository extends JpaRepository<NhanVienDuAnEntity, Long> {
    @Query(value = "SELECT u FROM NhanVienDuAnEntity u WHERE u.status = 1")
    List<NhanVienDuAnEntity> GetAllActive();

    @Query(value = "SELECT nvda FROM NhanVienDuAnEntity nvda " +
            "WHERE nvda.nhanVien.nhanVienId = ?1 AND nvda.status = 1")
    List<NhanVienDuAnEntity> GetNVDAByNhanVien(Long id);

    @Query(value = "SELECT u from NhanVienEntity u WHERE exists (select x from NhanVienDuAnEntity x where x.nhanVien.nhanVienId = ?1)")
    List<NhanVienEntity> GetNVByDuAn(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE NhanVienDuAnEntity nvda SET nvda.status = 0 WHERE nvda.nhanVien.nhanVienId = ?1")
    void RemoveNVDAByNhanVien(Long nhanVienId);
}
