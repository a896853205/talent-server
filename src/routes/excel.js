import { generateExcel } from '../service/excel-service'
import send from 'koa-send';
import { formDao } from '../dao/form-dao';
import { pathHelper } from '../service/excel-util/path-helper'

const router = require('koa-router')()


router.post('/generateExcel', async (ctx, next) => {
  let { userId } = ctx.request.body;
  // let formUser = form._from_user

  let form = await formDao.getCompanyForm(userId);
  // 提交表格时，生成以自己ID命名的Excel表格

  //获取到用户的id
  await generateExcel(form, userId)

  ctx.body = '生成表格成功';
})

router.get('/download/:name', async function (ctx) {
  if (ctx.params.name === '下载faq') {
    let fileName = '常见问题回答.pdf';
    ctx.attachment('常见问题回答.pdf');
    let readPath = pathHelper.downLoadFaqPath();
    await send(ctx, fileName, { root: readPath });
  } else if(ctx.params.name === '账号分配系统使用说明'){
    let fileName = '账号分配系统使用说明.pdf';
    ctx.attachment('账号分配系统使用说明.pdf');
    let readPath = pathHelper.downLoadFaqPath();
    await send(ctx, fileName, { root: readPath });
  } else {
    let fileName = ctx.params.name + '.xlsx';
    console.log(fileName)
    // Set Content-Disposition to "attachment" to signal the client to prompt for download.
    // Optionally specify the filename of the download.
    // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
    // 也可以直接设置 ctx.set("Content-disposition", "attachment; filename=" + fileName);
    ctx.attachment(fileName);
    let readPath = pathHelper.downLoadPath()
    await send(ctx, fileName, { root: readPath });
  }
});




module.exports = router