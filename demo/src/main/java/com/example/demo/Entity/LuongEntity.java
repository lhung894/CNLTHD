package com.example.demo.Entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table (name = "Luong")
public class LuongEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LuongId")
    private Long luongId;

    @Column(name = "NgayTinhLuong", nullable = false)
    private LocalDate ngayTinhLuong;

    @Column(name = "LuongThucLanh", nullable = false)
    private Long luongThucLanh;

    @ManyToOne(optional = false)
    @JoinColumn(name = "NhanVienId", foreignKey = @ForeignKey(name = "FK_Luong_NhanVien"))
    private NhanVienEntity nhanVien;

    @Column(name = "Status", columnDefinition = "int default 1", nullable = false)
    private Integer status;

    public LuongEntity() {
    }

    public Long getLuongId() {
        return luongId;
    }

    public void setLuongId(Long luongId) {
        this.luongId = luongId;
    }

    public LocalDate getNgayTinhLuong() {
        return ngayTinhLuong;
    }

    public void setNgayTinhLuong(LocalDate ngayTinhLuong) {
        this.ngayTinhLuong = ngayTinhLuong;
    }

    public Long getLuongThucLanh() {
        return luongThucLanh;
    }

    public void setLuongThucLanh(Long luongThucLanh) {
        this.luongThucLanh = luongThucLanh;
    }

    public NhanVienEntity getNhanVien() {
        return nhanVien;
    }

    public void setNhanVien(NhanVienEntity nhanVien) {
        this.nhanVien = nhanVien;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "LuongEntity{" +
                "luongId=" + luongId +
                ", ngayTinhLuong=" + ngayTinhLuong +
                ", luongThucLanh=" + luongThucLanh +
                ", nhanVien=" + nhanVien +
                ", status=" + status +
                '}';
    }
}
