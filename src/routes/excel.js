import { generateExcel } from '../service/excel-service'
import send from 'koa-send';

import { pathHelper } from '../service/excel-util/path-helper'

const router = require('koa-router')()


router.post('/generateExcel', async (ctx, next) => {
  let { form } = ctx.request.body;
  let formUser = form._from_user

  // 提交表格时，生成以自己ID命名的Excel表格

  //获取到用户的id
  await generateExcel(form, formUser)

  ctx.body = '生成表格成功';
})

router.get('/download/:name', async function (ctx) {
  let fileName = ctx.params.name + '.xlsx';
  console.log(fileName)
  // Set Content-Disposition to "attachment" to signal the client to prompt for download.
  // Optionally specify the filename of the download.
  // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
  // 也可以直接设置 ctx.set("Content-disposition", "attachment; filename=" + fileName);
  ctx.attachment(fileName);
  let readPath = pathHelper.downLoadPath()
  await send(ctx, fileName, { root: readPath });
});




module.exports = router