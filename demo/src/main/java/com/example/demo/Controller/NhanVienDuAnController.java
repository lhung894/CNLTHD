package com.example.demo.Controller;

import com.example.demo.Entity.NhanVienDuAnEntity;
import com.example.demo.Service.NhanVienDuAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin ("http://localhost:3000")
@RestController
@RequestMapping (value = "/api/nhanvienduan")
public class NhanVienDuAnController
{
	 @Autowired
	 private NhanVienDuAnService nhanVienDuAnService;

	 @GetMapping ("")// Get danh sách
	 public List<NhanVienDuAnEntity> getAll ()
	 {
		  return nhanVienDuAnService.GetAllActive();
	 }
	 
	 @GetMapping ("/{id}")// info 1 phần tử trong danh sách
	 public ResponseEntity<NhanVienDuAnEntity> getById (@PathVariable Long id)
	 {
		  Optional<NhanVienDuAnEntity> e = nhanVienDuAnService.FindById (id);
		  return e.map (nhanVienDuAnEntity -> new ResponseEntity<> (nhanVienDuAnEntity, HttpStatus.OK)).orElseGet (() -> new ResponseEntity<> (HttpStatus.NOT_FOUND));
	 }
	 
	 @PostMapping ("")// Thêm
	 public ResponseEntity<NhanVienDuAnEntity> insert (@RequestBody NhanVienDuAnEntity nhanVienDuAnEntity)
	 {
		 nhanVienDuAnEntity.setStatus(1);
		  Long id = nhanVienDuAnService.Insert (nhanVienDuAnEntity).getNhanVienDuAnId();
		  Optional<NhanVienDuAnEntity> e = nhanVienDuAnService.FindById (id);
		  return e.map (Entity -> new ResponseEntity<> (Entity, HttpStatus.OK)).orElseGet (() -> new ResponseEntity<> (HttpStatus.NOT_ACCEPTABLE));
	 }
	 
	 //
	 @PutMapping ("/{id}")// Cập nhật thông tin phần tử
	 public ResponseEntity<NhanVienDuAnEntity> update (@PathVariable Long id, @RequestBody NhanVienDuAnEntity nhanVienDuAnEntity)
	 {
		  Optional<NhanVienDuAnEntity> e = nhanVienDuAnService.FindById (id);
		  if (e.isPresent ())
		  {
				nhanVienDuAnEntity.setNhanVienDuAnId(id);
				return new ResponseEntity<> (nhanVienDuAnService.Update (nhanVienDuAnEntity), HttpStatus.OK);
		  }
		  return new ResponseEntity<> (HttpStatus.NOT_FOUND);
	 }
	 
	 @PutMapping ("/remove/{id}")// Cập nhật lại status của phần tử
	 public ResponseEntity<NhanVienDuAnEntity> remove (@PathVariable Long id)
	 {
		  Optional<NhanVienDuAnEntity> e = nhanVienDuAnService.FindById (id);
		  if (e.isPresent ())
		  {
			  e.get().setStatus(0);
				return new ResponseEntity<> (nhanVienDuAnService.Update (e.get()), HttpStatus.OK);
		  }
		  return new ResponseEntity<> (HttpStatus.NOT_FOUND);
	 }
	 
	 @DeleteMapping ("/{id}")// Xóa vĩnh viễn phần tử
	 public ResponseEntity<NhanVienDuAnEntity> delete (@PathVariable Long id)
	 {
		  Optional<NhanVienDuAnEntity> e = nhanVienDuAnService.FindById (id);
		  if (e.isPresent ())
		  {
				nhanVienDuAnService.Delete (id);
				return new ResponseEntity<> (HttpStatus.OK);
		  }
		  return new ResponseEntity<> (HttpStatus.NOT_FOUND);
	 }
}
