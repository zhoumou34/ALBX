//引入express
const express = require('express')
//引入fs模块
// const fs = require('fs')
//引入路由模块
const router = require('./router/index.js')
//引入ejs模块
const ejs = require('ejs')
//创建应用
const app = express()
//监听对象
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})
//设置ejs为模板引擎
app.set('view engine', 'ejs')
app.set('views', 'views')
//添加静态托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))
//添加路由配置
// app.get('/', (req, res) => {
//   fs.readFile(__dirname + '/views/index.html', 'utf-8', (err, data) => {
//     if (err) return console.log("404");
//     res.end(data)
//   })
// })
app.use(router)