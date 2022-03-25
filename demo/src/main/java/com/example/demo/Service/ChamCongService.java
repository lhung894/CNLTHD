package com.example.demo.Service;

import com.example.demo.Entity.ChamCongEntity;
import com.example.demo.Repository.ChamCongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChamCongService {
    @Autowired
    private ChamCongRepository chamCongRepository;

    public List<ChamCongEntity> FindAll() {
        return chamCongRepository.findAll();
    }

    public Optional<ChamCongEntity> FindById(Long id) {
        return chamCongRepository.findById(id);
    }

    public ChamCongEntity Insert(ChamCongEntity chamCong) {
        return chamCongRepository.save(chamCong);
    }

    public ChamCongEntity Update(ChamCongEntity chamCong) {
        return chamCongRepository.save(chamCong);
    }

    public void Delete(Long id) {
        chamCongRepository.deleteById(id);
    }

    public List<ChamCongEntity> GetAllActive() {
        return chamCongRepository.GetAllActive();
    }
}
