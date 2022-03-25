package com.example.demo.Repository;

import com.example.demo.Entity.ChamCongEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChamCongRepository extends JpaRepository<ChamCongEntity, Long> {
    @Query(value = "SELECT u FROM ChamCongEntity u WHERE u.status = 1")
    List<ChamCongEntity> GetAllActive();
}
