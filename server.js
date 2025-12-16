const express = require('express');
const { Pool } = require('pg'); // Cần chạy lệnh: npm install pg
const app = express();

// Dán cái link External Database URL bạn vừa copy vào đây
const connectionString = 'postgresql://my_database_cay4_user:t2chs6B1vmZqGYgUQx3ZjAxupMBpaiwk@dpg-d50oarggjchc73chchb0-a.oregon-postgres.render.com/my_database_cay4';

const pool = new Pool({
  connectionString: connectionString,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Lệnh test kết nối
    res.json({
      message: "Kết nối Database thành công!",
      db_time: result.rows[0].now,
      project: "Backend Project 2 - MSSV của bạn"
    });
  } catch (err) {
    res.status(500).send("Lỗi kết nối Database: " + err.message);
  }
});

app.listen(3000, () => console.log('Server is running!'));