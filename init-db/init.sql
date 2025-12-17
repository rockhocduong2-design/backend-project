CREATE TABLE SinhVien (
    id SERIAL PRIMARY KEY,
    ho_ten VARCHAR(100),
    mssv VARCHAR(20),
    diem_thi FLOAT
);

INSERT INTO SinhVien (ho_ten, mssv, diem_thi) VALUES 
('Nguyen Van A', 'SV001', 8.5),
('Tran Thi B', 'SV002', 9.0);