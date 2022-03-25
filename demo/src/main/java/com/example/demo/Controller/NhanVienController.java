package com.example.demo.Controller;

import com.example.demo.Entity.ChiTietNhanVienEntity;
import com.example.demo.Entity.NhanVienChiTietDTO;
import com.example.demo.Entity.NhanVienEntity;
import com.example.demo.Service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/nhanvien")
public class NhanVienController {
    @Autowired
    private NhanVienService nhanVienService;
    @Autowired
    private ChiTietNhanVienController chiTietNhanVienController;
    @Autowired
    private PhongBanController phongBanController;
    @Autowired
    private ChucVuController chucVuController;
    @Autowired
    private CongViecController congViecController;
    
    @GetMapping("")
    public List<NhanVienEntity> getAll() {
        return nhanVienService.GetAllActive();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<NhanVienEntity> getById(@PathVariable Long id) {
        Optional<NhanVienEntity> e = nhanVienService.FindById(id);
        return e.map(nhanVienEntity -> new ResponseEntity<>(nhanVienEntity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @PostMapping ("")
    public ResponseEntity<NhanVienEntity> insert(@RequestBody NhanVienChiTietDTO nhanVienChiTietDTO) {
        nhanVienChiTietDTO.getNhanVien ().setPhongBan (phongBanController.getPhongBanById (nhanVienChiTietDTO.getPhongBanId ()));
        nhanVienChiTietDTO.getNhanVien ().setChucVu (chucVuController.getChucVuById (nhanVienChiTietDTO.getChucVuId ()));
        nhanVienChiTietDTO.getNhanVien ().setCongViec (congViecController.getCongViecById (nhanVienChiTietDTO.getCongViecId ()));
        nhanVienChiTietDTO.getNhanVien ().setStatus (1);
        Long id = nhanVienService.Insert(nhanVienChiTietDTO.getNhanVien ()).getNhanVienId();
        Optional<NhanVienEntity> e = nhanVienService.FindById(id);
        if (e.isPresent ()){
            nhanVienChiTietDTO.getChiTietNhanVien ().setNhanVien (e.get ());
            nhanVienChiTietDTO.getChiTietNhanVien ().setStatus (1);
            ResponseEntity<ChiTietNhanVienEntity> ctnv = chiTietNhanVienController.insert (nhanVienChiTietDTO.getChiTietNhanVien ());
            if (ctnv.getStatusCode ().value () != 200){
                nhanVienService.Delete (id);
            }
//        System.out.println(e)
        };
//        System.out.println(e.map(nhanVienEntity1 -> new ResponseEntity<>(nhanVienEntity1, HttpStatus.OK)));
        return e.map(a -> new ResponseEntity<>(a, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<NhanVienEntity> update(@PathVariable Long id, @RequestBody NhanVienEntity nhanVienEntity) {
        Optional<NhanVienEntity> e = nhanVienService.FindById(id);
        if (e.isPresent()) {
            nhanVienEntity.setNhanVienId(id);
            return new ResponseEntity<>(nhanVienService.Update(nhanVienEntity), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PutMapping ("/remove/{id}")
    public ResponseEntity<NhanVienEntity> remove(@PathVariable Long id, @RequestBody NhanVienEntity nhanVienEntity) {
        Optional<NhanVienEntity> e = nhanVienService.FindById(id);
        if (e.isPresent()) {
            nhanVienEntity.setNhanVienId(id);
            nhanVienEntity.setStatus(0);
            return new ResponseEntity<> (nhanVienService.Update(nhanVienEntity), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping ("/{id}")
    public ResponseEntity<NhanVienEntity> delete(@PathVariable Long id) {
        Optional<NhanVienEntity> e = nhanVienService.FindById(id);
        if (e.isPresent()) {
            nhanVienService.Delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
