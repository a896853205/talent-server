import { generateExcel } from '../service/excel-service'

const router = require('koa-router')()


router.post('/generateExcel', async (ctx, next) => {
  let { form } = ctx.request.body;
  let formUser = form._from_user

  // 提交表格时，生成以自己ID命名的Excel表格

  //获取到用户的id
  await generateExcel(form, formUser)
  ctx.body = '生成表格成功';
})




module.exports = router