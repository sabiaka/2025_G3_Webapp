const express = require('express');
const router = express.Router();

// POST /api/auth/login
// 例: URL: http://localhost:3000/api/auth/login
// ボディ(JSON): { "email": "taro@example.com", "password": "password" }
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // 仮の認証ロジック
    if (email === 'taro@example.com' && password === 'password') {
        res.json({ token: 'dummy-jwt-token', user: { id: 1, name: '山田太郎', email } });
    } else {
        res.status(401).json({ message: '認証失敗' });
    }
});

// POST /api/auth/register
// 例: URL: http://localhost:3000/api/auth/register
// ボディ(JSON): { "name": "山田花子", "email": "hanako@example.com", "password": "password123" }
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // 仮の登録ロジック
    res.json({ id: 3, name, email });
});

module.exports = router;
