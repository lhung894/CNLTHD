package com.example.demo.Service;

import com.example.demo.Entity.NhanVienEntity;
import com.example.demo.Repository.NhanVienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NhanVienService {
    @Autowired
    private NhanVienRepository nhanVienRepository;

    public List<NhanVienEntity> FindAll() {
        return nhanVienRepository.findAll();
    }

    public Optional<NhanVienEntity> FindById(Long id) {
        return nhanVienRepository.findById(id);
    }

    public void Insert(NhanVienEntity nhanVien) {
        nhanVienRepository.save(nhanVien);
    }

    public void Update(NhanVienEntity nhanVien) {
        nhanVienRepository.save(nhanVien);
    }

    public void Delete(Long id) {
        nhanVienRepository.deleteById(id);
    }
}
