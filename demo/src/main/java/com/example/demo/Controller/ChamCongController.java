package com.example.demo.Controller;

import com.example.demo.Entity.ChamCongEntity;
import com.example.demo.Entity.NhanVienEntity;
import com.example.demo.Entity.TrangThaiChamCongEntity;
import com.example.demo.Service.ChamCongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/chamcong")
public class ChamCongController {
    @Autowired
    private ChamCongService chamCongService;
    @Autowired
    private NhanVienController nhanVienController;
    @Autowired
    private TrangThaiChamCongController trangThaiChamCongController;

    @CrossOrigin("http://localhost:3000")
    @GetMapping("")
    public List<ChamCongEntity> getAll() {
        return chamCongService.GetAllActive();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChamCongEntity> getById(@PathVariable Long id) {
        Optional<ChamCongEntity> e = chamCongService.FindById(id);
        return e.map(chamCongEntity -> new ResponseEntity<>(chamCongEntity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ChamCongEntity getChamCongById(Long id) {
        Optional<ChamCongEntity> cc = chamCongService.FindById(id);
        return cc.get();
    }

    @PostMapping("/capphat")
    public void capPhat() {
        ChamCongEntity chamCong;
        TrangThaiChamCongEntity tt = trangThaiChamCongController.getTrangThaiChamCongById(1L);
        LocalDate now = LocalDate.now();
        for (NhanVienEntity nv : nhanVienController.getAll()) {
            chamCong = new ChamCongEntity();
            chamCong.setNgayChamCong(now);
            chamCong.setStatus(1);
            chamCong.setNhanVien(nv);
            chamCong.setTrangThaiChamCong(tt);
            chamCongService.Insert(chamCong);
            System.out.println(chamCong);
        }
    }

    @PostMapping("")
    public ResponseEntity<ChamCongEntity> insert(@RequestBody ChamCongEntity chamCongEntity) {
        chamCongEntity.setNhanVien(nhanVienController.getNhanVienById(chamCongEntity.getNhanVien().getNhanVienId()));
        chamCongEntity.setTrangThaiChamCong(trangThaiChamCongController.getTrangThaiChamCongById(chamCongEntity.getTrangThaiChamCong().getTrangThaiChamCongId()));
        Long id = chamCongService.Insert(chamCongEntity).getChamCongId();
        Optional<ChamCongEntity> e = chamCongService.FindById(id);
        return e.map(chamCongEntity1 -> new ResponseEntity<>(chamCongEntity1, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE));
//        return new ResponseEntity<>(chamCongEntity, HttpStatus.OK);
    }

    //
    @PutMapping("/{id}")
    public ResponseEntity<ChamCongEntity> update(@PathVariable Long id, @RequestBody ChamCongEntity chamCongEntity) {
        Optional<ChamCongEntity> e = chamCongService.FindById(id);
        if (e.isPresent()) {
            chamCongEntity.setChamCongId(id);
            chamCongEntity.setNhanVien(nhanVienController.getNhanVienById(chamCongEntity.getNhanVien().getNhanVienId()));
            chamCongEntity.setTrangThaiChamCong(trangThaiChamCongController.getTrangThaiChamCongById(chamCongEntity.getTrangThaiChamCong().getTrangThaiChamCongId()));
            return new ResponseEntity<>(chamCongService.Update(chamCongEntity), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/remove/{id}")
    public ResponseEntity<ChamCongEntity> remove(@PathVariable Long id, @RequestBody ChamCongEntity chamCongEntity) {
        Optional<ChamCongEntity> e = chamCongService.FindById(id);
        if (e.isPresent()) {
            chamCongEntity.setChamCongId(id);
            chamCongEntity.setStatus(0);
            return new ResponseEntity<>(chamCongService.Update(chamCongEntity), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ChamCongEntity> delete(@PathVariable Long id) {
        Optional<ChamCongEntity> e = chamCongService.FindById(id);
        if (e.isPresent()) {
            chamCongService.Delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
