package com.example.demo.Repository;

import com.example.demo.Entity.ChamCongEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChamCongRepository extends JpaRepository<ChamCongEntity, Long> {
}
