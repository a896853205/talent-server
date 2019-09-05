export const outStatusTransform = _out_status => {
  // 这里是转换_summary的数据结构的
  let transformOutStatus = [];
  _out_status = Array.from(_out_status)

  _out_status.forEach(element => {
    let obj = {};
    let info = [];
    for (let outStatusItem of element.info) {
      if (outStatusItem.label === '离职时间') {
        let formatTime = outStatusItem.value.slice(0, 10)
        info.push(formatTime)
      } else if (outStatusItem.label === '离职原因（多选）') {
        let arr = new Array(12)
        let obj2 = { '离职原因（多选）': arr }
        outStatusItem.value.forEach(item => {
          switch (item) {
            case '气候环境恶劣':
              obj2['离职原因（多选）'][0] = item;
              break;
            case '房价高':
              obj2['离职原因（多选）'][1] = item;
              break;
            case '公共服务效率低':
              obj2['离职原因（多选）'][2] = item;
              break;
            case '医疗资源不满意':
              obj2['离职原因（多选）'][3] = item;
              break;
            case '教育资源不满意':
              obj2['离职原因（多选）'][4] = item;
              break;
            case '赡养老人压力大':
              obj2['离职原因（多选）'][5] = item;
              break;
            case '收入低':
              obj2['离职原因（多选）'][6] = item;
              break;
            case '工作环境不满意':
              obj2['离职原因（多选）'][7] = item;
              break;
            case '与同事关系相处不融洽':
              obj2['离职原因（多选）'][8] = item;
              break;
            case '所在单位发展前景差':
              obj2['离职原因（多选）'][9] = item;
              break;
            case '个人晋升空间窄':
              obj2['离职原因（多选）'][10] = item;
              break;
            case '其他':
              obj2['离职原因（多选）'][11] = item;
              break;
          }
        });
        info.push(obj2);
      } else {
        info.push(outStatusItem.value);
      }
    }
    obj.info = info;
    transformOutStatus.push(obj);
  });




  return transformOutStatus;
}