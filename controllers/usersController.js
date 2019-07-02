//引入fs模块
const fs = require('fs')

//读取前台页面
module.exports.getIndexPage = (req, res) => {
  fs.readFile(__dirname + '/../views/index.ejs', 'utf-8', (err, data) => {
    if (err) return res.end('404');
    res.end(data);
  })
}
module.exports.getListPage = (req, res) => {
  fs.readFile(__dirname + '/../views/list.ejs', 'utf-8', (err, data) => {
    if (err) return res.end('404');
    res.end(data);
  })
}
module.exports.getDetailPage = (req, res) => {
  fs.readFile(__dirname + '/../views/detail.ejs', 'utf-8', (err, data) => {
    if (err) return res.end('404');
    res.end(data);
  })
}
//读取后台管理页面
module.exports.getAdminPage = (req, res) => {
  fs.readFile(__dirname + '/../views/admin/index.ejs', 'utf-8', (err, data) => {
    if (err) return res.end('404');
    res.end(data)
  })
}