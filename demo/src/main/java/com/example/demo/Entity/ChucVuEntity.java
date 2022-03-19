package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table (name = "ChucVu")
public class ChucVuEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ChucVuId")
    private Long chucVuId;

    @Column(name = "TenChucVu", nullable = false, unique = true)
    private String tenChucVu;

    @Column(name = "HeSoChucVu", nullable = false)
    private double heSoChucVu;

    public ChucVuEntity() {
    }

    public ChucVuEntity(Long chucVuId, String tenChucVu, double heSoChucVu) {
        this.chucVuId = chucVuId;
        this.tenChucVu = tenChucVu;
        this.heSoChucVu = heSoChucVu;
    }

    public Long getChucVuId() {
        return chucVuId;
    }

    public void setChucVuId(Long chucVuId) {
        this.chucVuId = chucVuId;
    }

    public String getTenChucVu() {
        return tenChucVu;
    }

    public void setTenChucVu(String tenChucVu) {
        this.tenChucVu = tenChucVu;
    }

    public double getHeSoChucVu() {
        return heSoChucVu;
    }

    public void setHeSoChucVu(double heSoChucVu) {
        this.heSoChucVu = heSoChucVu;
    }

    @Override
    public String toString() {
        return "ChucVuEntity{" +
                "chucVuId=" + chucVuId +
                ", tenChucVu='" + tenChucVu + '\'' +
                ", heSoChucVu=" + heSoChucVu +
                '}';
    }
}
