package com.example.demo.Service;

import com.example.demo.Entity.CongViecEntity;
import com.example.demo.Repository.CongViecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CongViecService {
    @Autowired
    private CongViecRepository congViecRepository;

    public List<CongViecEntity> FindAll() {
        return congViecRepository.findAll();
    }

    public Optional<CongViecEntity> FindById(Long id) {
        return congViecRepository.findById(id);
    }

    public void Insert(CongViecEntity congViec) {
        congViecRepository.save(congViec);
    }

    public void Update(CongViecEntity congViec) {
        congViecRepository.save(congViec);
    }

    public void Delete(Long id) {
        congViecRepository.deleteById(id);
    }
}
