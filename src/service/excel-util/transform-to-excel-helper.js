import { summaryTransform } from './transform/summary';
import { sumInTransform } from './transform/sum-in';
import { sumOutTransform } from './transform/sum-out';
export const transform = form => {
  let _summary = [],
  _summary_nei = [],
  _summary_wai = [],
  _sum_in = [],
  _sum_in_nei = [],
  _sum_in_wai = [],
  _sum_out = [],
  _sum_out_nei = [],
  _sum_out_wai = [];
  // 基本数据不用处理

  // 判断类型4类调用
  // 如果是事业单位就调用事业单位的处理函数
  switch (form._basic[4].value) {
    case '机关':
      // 非事业单位调用非事业单位的处理函数
      // summary数据处理
      _summary = summaryTransform(form._summary);
      _sum_in = sumInTransform(form._sum_in);
      _sum_out = sumOutTransform(form._sum_out);
      break;
    case '社会团体':
      // 非事业单位调用非事业单位的处理函数
      // summary数据处理
      _summary = summaryTransform(form._summary);
      break;
    case '事业单位':
      // 进行编制内编制外的处理函数
      _summary_nei = summaryTransform(form._summary_nei);
      _summary_wai = summaryTransform(form._summary_wai);
      break;
    default:
      // 非事业单位调用非事业单位的处理函数
      // summary数据处理
      _summary = summaryTransform(form._summary);
  }

  // 最终的返回数据
  return {
    _summary,
    _summary_nei,
    _summary_wai,
    _sum_in,
    _sum_in_nei,
    _sum_in_wai,
    _sum_out,
    _sum_out_nei,
    _sum_out_wai
  };
}