const express = require('express')
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('aaa.')
})
app.post('/', (req, res) => {
  res.send('bbb.')
})

app.listen(8000, () => {
  console.log('http://127.0.0.1:8000')
})
