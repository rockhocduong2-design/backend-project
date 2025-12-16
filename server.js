const express = require('express');
const { Pool } = require('pg'); // Nhớ chạy lệnh: npm install pg
const app = express();

// 1. Dán link ở tab Internal (từ Render) vào đây
const connectionString = 'postgresql://my_database_cay4_user:t2chs6B1vmZqGYgUQx3ZjAxupMBpaiwk@dpg-d50oarggjchc73chchb0-a/my_database_cay4'; 

const pool = new Pool({
  connectionString: connectionString,
});

app.get('/', async (req, res) => {
    try {
        // 2. Truy vấn lấy toàn bộ dữ liệu từ bảng SinhVien
        const result = await pool.query('SELECT * FROM SinhVien');
        
        // 3. Tạo giao diện bảng HTML
        let html = `
            <style>
                table { width: 80%; border-collapse: collapse; margin: 20px auto; font-family: Arial, sans-serif; }
                th, td { border: 1px solid #ddd; padding: 12px; text-align: center; }
                th { background-color: #4CAF50; color: white; }
                tr:nth-child(even) { background-color: #f2f2f2; }
                h1 { text-align: center; color: #333; }
            </style>
            <h1>Danh sách Sinh viên từ Database (Render)</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Họ và Tên</th>
                    <th>MSSV</th>
                    <th>Điểm</th>
                </tr>`;
        
        // Lặp qua từng dòng dữ liệu để đưa vào bảng
        result.rows.forEach(sv => {
            html += `
                <tr>
                    <td>${sv.id}</td>
                    <td>${sv.ho_ten}</td>
                    <td>${sv.mssv}</td>
                    <td>${sv.diem_thi}</td>
                </tr>`;
        });
        
        html += `</table>`;
        res.send(html);

    } catch (err) {
        res.status(500).send("Lỗi kết nối hoặc truy vấn: " + err.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại cổng: ${PORT}`);
});