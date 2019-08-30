import { formDao } from '../dao/form-dao';
import { userDao } from '../dao/user-dao';

const router = require('koa-router')()

router.get('/companyFormGet', async (ctx, next) => {
  let { user_name, user_password }= ctx.query;
  
  let id = await userDao.getUserId(user_name, user_password)
  let form = await formDao.getCompanyForm(id)
  
  ctx.body = form
})

module.exports = router