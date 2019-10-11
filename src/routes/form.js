import { formDao } from '../dao/form-dao';

const router = require('koa-router')()

router.get('/companyFormGet', async (ctx, next) => {
  let { userId } = ctx.query;

  let form = await formDao.getCompanyForm(userId);
  
  ctx.body = { form };
})

router.post('/companyFormSave', async (ctx, next) => {
  let { form, userId } = ctx.request.body,
      returnForm = await formDao.getCompanyForm(userId);

  // 添加日志看看谁是小坏蛋
  console.log('save ' + userId);
  console.log(new Date());
  // 当数据库没有数据时插入,有数据时进行更新操作.
  if (returnForm) {
    formDao.companyFormSave(form);
  } else {
    formDao.initFrom(userId, form);
  }
  
  ctx.response.body = 'success'
})

router.post('/companyFormSubmit', async ctx => {
  let { form } = ctx.request.body;

  console.log('submit ' + form._from_user);
  console.log(new Date());

  form._confirmed = true;
  formDao.companyFormSave(form);

  ctx.response.body = 'success'
});

module.exports = router