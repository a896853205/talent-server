export const needTransform = _need => {
  // 这里是转换_summary的数据结构的
  let transformNeed = [];
  _need = Array.from(_need)

  _need.forEach(element => {
    let obj = {};
    let info = [];

    for (let needItem of element.info) {
      info.push(needItem.value);
    }
    obj.info = info;
    transformNeed.push(obj);
  });




  return transformNeed;
}