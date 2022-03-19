package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table (name = "PhongBan")
public class PhongBanEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PhongBanId")
    private Long phongBanId;

    @Column(name = "TenPhongBan", nullable = false)
    private String tenPhongBan;

    @Column(name = "SdtPhongBan", nullable = false)
    private String sdtPhongBan;

    public PhongBanEntity() {
    }

    public Long getPhongBanId() {
        return phongBanId;
    }

    public void setPhongBanId(Long phongBanId) {
        this.phongBanId = phongBanId;
    }

    public String getTenPhongBan() {
        return tenPhongBan;
    }

    public void setTenPhongBan(String tenPhongBan) {
        this.tenPhongBan = tenPhongBan;
    }

    public String getSdtPhongBan() {
        return sdtPhongBan;
    }

    public void setSdtPhongBan(String sdtPhongBan) {
        this.sdtPhongBan = sdtPhongBan;
    }

    @Override
    public String toString() {
        return "PhongBanEntity{" +
                "phongBanId=" + phongBanId +
                ", tenPhongBan='" + tenPhongBan + '\'' +
                ", sdtPhongBan='" + sdtPhongBan + '\'' +
                '}';
    }
}
