import { formDao } from '../dao/form-dao';
import { userDao } from '../dao/user-dao';

const router = require('koa-router')()

router.get('/companyFormGet', async (ctx, next) => {
  let { user_name, user_password }= ctx.query;
  
  let id = await userDao.getUserId(user_name, user_password)
  let form = await formDao.getCompanyForm(id)
  
  ctx.body = form
})

router.post('/companyFormSave', async (ctx, next) => {
  let { form, userId } = ctx.request.body,
      returnForm = await formDao.getCompanyForm(userId);
  
  // 当数据库没有数据时插入,有数据时进行更新操作.
  if (returnForm) {
    formDao.companyFormSave(form);
  } else {
    formDao.initFrom(form);
  }
  
  //如果是提交状态，就生成对应的excel文件
  // if(data._confirmed){
  //   //生成当前用户的Excel，以用户的id为名字
  //   let excelName = data._from_user
  //   console.log(excelName)
  //   let _basic = data._basic
  //   let _sum_in = await generateGangWeiLeiBie2(data._sum_in)
  //   let _sum_out = await generateGangWeiLeiBie2(data._sum_out)
  //   let _summary = await generateGangWeiLeiBie2(data._summary)
  //   let _out_status = data._out_status
  //   let _need = data._need
  //   let sourceData = [
  //       [_basic],
  //       _sum_in,
  //       _sum_out,
  //       _summary,
  //       _out_status,
  //       _need,
  //   ]
  //   await generateExcel(sourceData,excelName)
  // }
  ctx.response.body = 'success'
})

module.exports = router