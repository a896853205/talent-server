import { db } from '../resources/db-connect';
import { userDao } from '../dao/user-dao';
import { formDao } from '../dao/form-dao';

const router = require('koa-router')()

// router.prefix('/users')

/**
 * 用户注册
 */
router.get('/register', async (ctx, next) => {
  let { user_name, user_password, user_id_card} = ctx.query;
  
  let result = await userDao.selectByName(user_name);
  
  if (result) {
      ctx.body = -1;
      return;
  }
  
  result = await collections.findOne({ _user_id_card: user_id_card });

  if (result) {
      ctx.body = -2
      return;
  }
  
  result = await userDao.insertUser(user_name, user_password, user_id_card);
  await formDao.initFrom(result._id);
  
  ctx.body = 1
})

/**
 * 用户登录
 */
router.get('/login', async (ctx, next) => {
    let { user_name, user_password } = ctx.query;

    ctx.body = await userDao.getUserId(user_name, user_password)
})

module.exports = router
