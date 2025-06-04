const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: '山田太郎', email: 'taro@example.com' },
    { id: 2, name: '鈴木花子', email: 'hanako@example.com' }
  ]);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const user = { id: req.params.id, name: '山田太郎', email: 'taro@example.com' };
  res.json(user);
});

module.exports = router;
