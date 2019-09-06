import { userDao } from '../../dao/user-dao';
import { Result } from '../../../util/response';

const router = require('koa-router')();

router.prefix('/admin')

// 管理权限的登录路由
router.post('/login', async ctx => {
  let { userName, userPassword } = ctx.request.body;

  let user = await userDao.verifyUser(userName, userPassword, 1);

  if (!user) {
    ctx.body = new Result({ msg: '用户名或密码错误或者账户没有权限', status: 0 });
  } else {
    ctx.body = new Result({ data: user });
  }
});

// 管理权限的生成用户名和密码路由
router.post('/register', async ctx => {
  let { companyName, userRole, userId } = ctx.request.body;
  // 生成的usercode
  let subUserCode = '';

  // 根据自己生成一个下属的userCode
  subUserCode = await userDao.initUserCode(userId);
  // 再insert一个User
  await userDao.insertUser(companyName, userRole, subUserCode);

  ctx.body = new Result({
    msg: '添加成功'
  });
});

// 获取当前用户下的管理信息
router.post('/manageInfo', async ctx => {
  let { userId } = ctx.request.body;

  let subUserArr = [];

  let user = await userDao.selectByUserId(userId);
  subUserArr = await userDao.querySubUser(user._user_code);
  ctx.body = new Result({
    data: subUserArr
  });
})

// 向上级部门提交的管理信息
router.post('/submitManage', async ctx => {
  let { userId } = ctx.request.body;

  await userDao.submitManage(userId)
  ctx.body = new Result();
})

// 修改密码
router.post('/alterPassword', async ctx => {


  ctx.body = 'success';
})

module.exports = router;