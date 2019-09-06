import { userDao } from '../dao/user-dao';
import { Result } from '';

const router = require('koa-router')();

router.prefix('/admin')

// 管理权限的登录路由
router.post('./login', async ctx => {
  let { userName, userPassword } = ctx.request.body;

  let user = await userDao.verifyUser(userName, userPassword, 1);

  if (!user) {
    ctx.body = new Result({ msg: '用户名或密码错误或者账户没有权限', status: 0 });
  } else {
    ctx.body = new Result({ data: user });
  }
});

// 管理权限的生成用户名和密码路由
router.post('./register', async ctx => {
  let { companyName, userRole, userCode } = ctx.request.body;


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