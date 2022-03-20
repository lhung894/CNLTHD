package com.example.demo.Controller;

import com.example.demo.Entity.NhanVienEntity;
import com.example.demo.Service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/nhanvien")
public class NhanVienController {
    @Autowired
    private NhanVienService nhanVienService;
    
    @GetMapping("")
    public List<NhanVienEntity> getAll() {
        return nhanVienService.FindAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<NhanVienEntity> getById(@PathVariable Long id) {
        Optional<NhanVienEntity> e = nhanVienService.FindById(id);
        return e.map(nhanVienEntity -> new ResponseEntity<>(nhanVienEntity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
