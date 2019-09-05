const router = require('koa-router')();

router.prefix('/admin')

// 管理权限的登录路由
router.post('./login', async ctx => {

  ctx.body = 'success';
});

// 管理权限的生成用户名和密码路由
router.post('./register', async ctx => {

  ctx.body = 'success';
});

// 获取当前用户下的管理信息
router.post('./manageInfo', async ctx => {


  ctx.body = 'success';
})

// 向上级部门提交的管理信息
router.post('./submitManage', async ctx => {


  ctx.body = 'success';
})

// 修改密码
router.post('./alterPassword', async ctx => {


  ctx.body = 'success';
})