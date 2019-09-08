import { summaryTransform } from './transform/summary';  //机关的 summary
import { sumInTransform } from './transform/sum-in';
import { sumOutTransform } from './transform/sum-out';
import { outStatusTransform } from './transform/out-status';
import { needTransform } from './transform/need';

export const transform = form => {
  let _summary = [],
    _summary_nei = [],
    _summary_wai = [],
    _sum_in = [],
    _sum_in_nei = [],
    _sum_in_wai = [],
    _sum_out = [],
    _sum_out_nei = [],
    _sum_out_wai = [],
    _out_status = [],
    _out_status_nei = [],
    _out_status_wai = [],
    _need = [],
    _need_nei = [],
    _need_wai = [];
  // 基本数据不用处理

  // 判断类型4类调用
  // 如果是事业单位就调用事业单位的处理函数
  switch (form._basic[4].value) {
    case '机关':
      // 非事业单位调用非事业单位的处理函数
      // summary数据处理
      let fromTable1 = '机关';
      _summary = summaryTransform(form._summary, fromTable1);
      _sum_in = sumInTransform(form._sum_in, fromTable1);
      _sum_out = sumOutTransform(form._sum_out, fromTable1);
      _out_status = outStatusTransform(form._out_status);
      _need = needTransform(form._need);
      break;
    case '社会团体及民办非企业单位':
      // 非事业单位调用非事业单位的处理函数
      // summary数据处理
      //社会团体和事业单位的管理人员类别是一样的 都传入一样的所以我都传的是 社会团体
      let fromTable2 = '社会团体';
      _summary = summaryTransform(form._summary, fromTable2);
      _sum_in = sumInTransform(form._sum_in, fromTable2);
      _sum_out = sumOutTransform(form._sum_out, fromTable2);
      _out_status = outStatusTransform(form._out_status);
      _need = needTransform(form._need);
      break;
    case '事业单位':
      // 进行编制内编制外的处理函数
      //社会团体和事业单位的管理人员类别是一样的 都传入一样的所以我都传的是 社会团体
      let fromTable3 = '社会团体';
      _summary_nei = summaryTransform(form._summary_nei, fromTable3);
      _summary_wai = summaryTransform(form._summary_wai, fromTable3);
      _sum_in_nei = sumInTransform(form._sum_in_nei, fromTable3);
      _sum_in_wai = sumInTransform(form._sum_in_wai, fromTable3);
      _sum_out_nei = sumOutTransform(form._sum_out_nei, fromTable3);
      _sum_out_wai = sumOutTransform(form._sum_out_wai, fromTable3);
      _out_status_nei = outStatusTransform(form._out_status_nei);
      _out_status_wai = outStatusTransform(form._out_status_wai);
      _need_nei = needTransform(form._need_nei);
      _need_wai = needTransform(form._need_wai);
      
      // _summary_wai = summaryTransform(form._summary_wai);
      break;
    default:
      // 非事业单位调用非事业单位的处理函数
      // summary数据处理
      _summary = summaryTransform(form._summary, '企业');
      _sum_in = sumInTransform(form._sum_in);
      _sum_out = sumOutTransform(form._sum_out);
      _out_status = outStatusTransform(form._out_status);
      _need = needTransform(form._need);
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
    _sum_out_wai,
    _out_status,
    _out_status_nei,
    _out_status_wai,
    _need,
    _need_nei,
    _need_wai
  };
}