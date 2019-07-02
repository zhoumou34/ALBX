//引用user表的控制器模块
const pageController = require('../controllers/pagesController.js')
//封装路由模块
const express = require('express')

const router = express.Router()

//前台页面
router.get('/', pageController.getIndexPage)
  .get('/list', pageController.getListPage)
  .get('/detail', pageController.getDetailPage)

  //后台管理页面,统一添加admin做前缀
  .get('/admin', pageController.getAdminPage)
module.exports = router