const express = require('express');
const path = require('path');
const app = express();

// JSONボディのパース用（POSTとかで使うやつ）
app.use(express.json());

// 仮のAPIルート
app.get('/api/hello', (req, res) => {
  res.json({ message: 'やっほー！API動いてるよ💖' });
});

// 仮のAPIルート

app.get('/api/bye', (req, res) => {
  res.json({ message: '定時退社失敗' });
});

app.get('/api/unco', (req, res) => {
  res.json({ message: 'うんこAPI💩' });

});

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`💫 サーバー動いてるよ〜 → http://localhost:${PORT}`);
});
