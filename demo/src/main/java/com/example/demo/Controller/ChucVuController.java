package com.example.demo.Controller;

import com.example.demo.Entity.ChucVuEntity;
import com.example.demo.Service.ChucVuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/chucvu")
public class ChucVuController {
    @Autowired
    private ChucVuService chucVuService;

//    @GetMapping("/chucvu/{id}")
//    public ResponseEntity<List<ChucVuEntity>> findByChucVuId(@PathVariable Long id) {
//        Optional<ChucVuEntity> list = chucVuService.FindById(id);
//        if (!list.isEmpty()) {
//            return new ResponseEntity<>(list, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(list, HttpStatus.NOT_FOUND);
//        }
//    }

    @GetMapping("")
    public List<ChucVuEntity> getAll() {
        List<ChucVuEntity> filter1 = new ArrayList<>();
        for (ChucVuEntity cv : chucVuService.FindAll()) {
            if (cv.getStatus() == 1) {
                filter1.add(cv);
            }
        }
        return filter1;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChucVuEntity> getById(@PathVariable Long id) {
        Optional<ChucVuEntity> e = chucVuService.FindById(id);
        return e.map(chucVuEntity -> new ResponseEntity<>(chucVuEntity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    public ChucVuEntity getChucVuById (Long id){
        Optional<ChucVuEntity> cv = chucVuService.FindById (id);
        return cv.get ();
    }

    @PostMapping("")
    public ResponseEntity<ChucVuEntity> insert(@RequestBody ChucVuEntity chucVuEntity) {
        Long id = chucVuService.Insert(chucVuEntity).getChucVuId();
        Optional<ChucVuEntity> e = chucVuService.FindById(id);
//        System.out.println(e);
        System.out.println(e.map(chucVuEntity1 -> new ResponseEntity<>(chucVuEntity1, HttpStatus.OK)));
        return e.map(chucVuEntity1 -> new ResponseEntity<>(chucVuEntity1, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE));
    }

    //
    @PutMapping("/{id}")
    public ResponseEntity<ChucVuEntity> update(@PathVariable Long id, @RequestBody ChucVuEntity chucVuEntity) {
        Optional<ChucVuEntity> e = chucVuService.FindById(id);
        if (e.isPresent()) {
            chucVuEntity.setChucVuId(id);
            return new ResponseEntity<>(chucVuService.Update(chucVuEntity), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/remove/{id}")
    public ResponseEntity<ChucVuEntity> remove(@PathVariable Long id, @RequestBody ChucVuEntity chucVuEntity) {
        Optional<ChucVuEntity> e = chucVuService.FindById(id);
        if (e.isPresent()) {
            chucVuEntity.setChucVuId(id);
            chucVuEntity.setStatus(0);
            return new ResponseEntity<>(chucVuService.Update(chucVuEntity), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ChucVuEntity> delete(@PathVariable Long id) {
        Optional<ChucVuEntity> e = chucVuService.FindById(id);
        if (e.isPresent()) {
            chucVuService.Delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}