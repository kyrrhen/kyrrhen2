const express = require('express')
const app = express()

// 这就是那个测试接口
app.get('/api/hello', (req, res) => {
  res.json({ message: '成功了！' })
})

// 启动监听
app.listen(2111, () => {
  console.log('✅ 服务已启动，访问：http://localhost:2111')
})