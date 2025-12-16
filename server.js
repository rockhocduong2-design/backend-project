const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // Chỗ này để bạn sửa nội dung khi thầy yêu cầu test CI/CD
    res.send('<h1>Dự án Backend - Đã kết nối Database thành công!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});