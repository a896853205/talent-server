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

  form._confirmed = true;
  formDao.companyFormSave(form);

  ctx.response.body = 'success'
});

module.exports = router