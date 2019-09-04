import fs from 'fs'
import ejsexcel from 'ejsexcel'
import util from 'util'
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

import { pathHelper } from '../service/excel-util/path-helper';
import { transform } from './excel-util/transform-to-excel-helper'

export async function generateExcel(data, excelName) {
  //判断单位性质，生成对应的表格

  //这里先判断是否提交
  // if(_comfirmed)

  //完后根据单位性质生成对应的表格
  let readPath = '';
  //数据源
  let sourceData = [];

  switch (data._basic[4].value) {
    case '机关':
      readPath = pathHelper.generateReadPath('单位问卷—机关—打印版');
      console.log(transform(data)._sum_out[0]);
      sourceData = [
        data._basic,
        transform(data)._summary,
        transform(data)._sum_in,
        transform(data)._sum_out,
      ]
      break;
    case '社会团体':
      readPath = pathHelper.generateReadPath('单位问卷—社会团体—打印版');
      sourceData = [

      ]
      break;
    case '事业单位':
      readPath = pathHelper.generateReadPath('单位问卷—事业单位—打印版');
      sourceData = [

      ]
      break;
    default:
      readPath = pathHelper.generateReadPath('单位问卷—企业—打印版');
      sourceData = [

      ]
  }


  const exlBuf = await readFileAsync(readPath);

  //用数据源(对象)data渲染Excel模板
  const exlBuf2 = await ejsexcel.renderExcel(exlBuf, sourceData);
  await writeFileAsync(pathHelper.generateWritePath(excelName), exlBuf2);
}