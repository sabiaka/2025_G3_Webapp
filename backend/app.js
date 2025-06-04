// ================================================================
// サーバー起動方法
// 
// 1. 必要なパッケージをインストールします。
//    npm install express
// 
// 2. サーバーを起動します。
//    node app.js
// 
// 3. ブラウザで http://localhost:3000 を開きます。
//
// ================================================================

const express = require('express');
const path = require('path');
const app = express();

// JSONボディのパース用（POSTとかで使うやつ）
app.use(express.json());

// ルートの読み込み
const userRoutes = require('./routes/ユーザー');
const authRoutes = require('./routes/認証');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// トップページでAPI一覧を表示
app.get('/', (req, res) => {
  res.send(`
    <h1>APIエンドポイント一覧</h1>
    <ul>
      <li><a href="/api/users">GET /api/users</a></li>
      <li><a href="/api/users/1">GET /api/users/:id</a></li>
    </ul>
    <p>※このAPIはGETメソッドのみ対応しています。</p>
  `)
});

// ...他のルート

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`💫 サーバー動いてるよ〜 → http://localhost:${PORT}`);
});
