package com.example.demo.Entity;
import javax.persistence.*;

@Entity
@Table (name = "CongViec")
public class CongViecEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CongViecId")
    private Long congViecId;

    @Column(name = "TenCongViec", nullable = false, unique = true)
    private String tenCongViec;

    @Column(name = "HeSoCongViec", nullable = false)
    private double heSoCongViec;

    public CongViecEntity() {
    }

    public CongViecEntity(Long congViecId, String tenCongViec, double heSoCongViec) {
        this.congViecId = congViecId;
        this.tenCongViec = tenCongViec;
        this.heSoCongViec = heSoCongViec;
    }

    public Long getCongViecId() {
        return congViecId;
    }

    public void setCongViecId(Long congViecId) {
        this.congViecId = congViecId;
    }

    public String getTenCongViec() {
        return tenCongViec;
    }

    public void setTenCongViec(String tenCongViec) {
        this.tenCongViec = tenCongViec;
    }

    public double getHeSoCongViec() {
        return heSoCongViec;
    }

    public void setHeSoCongViec(double heSoCongViec) {
        this.heSoCongViec = heSoCongViec;
    }

    @Override
    public String toString() {
        return "CongViecEntity{" +
                "congViecId=" + congViecId +
                ", tenCongViec='" + tenCongViec + '\'' +
                ", heSoCongViec=" + heSoCongViec +
                '}';
    }
}
