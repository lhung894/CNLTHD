package com.example.demo.Repository;

import com.example.demo.Entity.NhanVienDuAnEntity;
import com.example.demo.Entity.NhanVienEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface NhanVienDuAnRepository extends JpaRepository<NhanVienDuAnEntity, Long> {
    @Query(value = "SELECT u FROM NhanVienDuAnEntity u WHERE u.status = 1")
    List<NhanVienDuAnEntity> GetAllActive();

    @Query(value = "SELECT nvda FROM NhanVienDuAnEntity nvda " +
            "WHERE nvda.nhanVien.nhanVienId = ?1 AND nvda.status = 1")
    List<NhanVienDuAnEntity> GetNVDAByNhanVien(Long id);

//    @Query(value = "SELECT u from ChiTietNhanVienEntity u WHERE exists (select x from NhanVienDuAnEntity x where x.nhanVien.nhanVienId = ?1)")
//    Optional<List<NhanVienEntity>> GetNVByDuAn(Long id);

    @Query(value = "select u.nhanVien from NhanVienDuAnEntity u where u.duAn.duAnId=?1 and u.nhanVien.status=1")
    Optional<List<NhanVienEntity>> GetNVByDuAn(Long id);

    @Query(value="select u from NhanVienEntity u where not exists (select x from NhanVienDuAnEntity x where x.duAn.duAnId=?1)")
    Optional<List<NhanVienEntity>> GetNVNotExits(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE NhanVienDuAnEntity nvda SET nvda.status = 0 WHERE nvda.nhanVien.nhanVienId = ?1")
    void RemoveNVDAByNhanVien(Long nhanVienId);
}
