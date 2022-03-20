package com.example.demo.Controller;

import com.example.demo.Entity.CongViecEntity;
import com.example.demo.Service.CongViecService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/congviec")
public class CongViecController {
    @Autowired
    private CongViecService congViecService;

//    @GetMapping("/congviec/{id}")
//    public ResponseEntity<List<CongViecEntity>> findByCongViecId(@PathVariable Long id) {
//        Optional<CongViecEntity> list = congViecService.FindById(id);
//        if (!list.isEmpty()) {
//            return new ResponseEntity<>(list, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(list, HttpStatus.NOT_FOUND);
//        }
//    }

    @GetMapping("")
    public List<CongViecEntity> getAll() {
        return congViecService.FindAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CongViecEntity> getById(@PathVariable Long id) {
        Optional<CongViecEntity> e = congViecService.FindById(id);
        return e.map(congViecEntity -> new ResponseEntity<>(congViecEntity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

//    @PostMapping("")
//    public ResponseEntity<CongViecEntity> insert(@RequestBody CongViecEntity congViecEntity) {
//        congViecService.Insert(congViecEntity);
//        Optional<CongViecEntity> e = congViecService.FindById(congViecEntity.getCongViecId());
//        return e.map(congViecEntity -> new ResponseEntity<>(congViecEntity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE));
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<CongViecEntity> update(@PathVariable Integer id, @RequestBody CongViecEntity congViecEntity) {
//        Optional<CongViecEntity> e = congViecService.GetById(id);
//        if (e.isPresent()) {
//            return new ResponseEntity<>(congViecService.Update(congViecEntity), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<CongViecEntity> delete(@PathVariable Integer id) {
//        Optional<CongViecEntity> e = congViecService.GetById(id);
//        if (e.isPresent()) {
//            congViecService.Delete(e.get());
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
}
