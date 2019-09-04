const router = require('koa-router')()

router.post('/generateExcel', async (ctx, next) => {
  // 提交表格时，生成以自己ID命名的Excel表格

  //获取到用户的id
  
  ctx.body = '生成表格成功';
})

module.exports = router