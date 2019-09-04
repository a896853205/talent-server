export const sumOutTransform = _sum_out => {
  // 这里是转换_summary的数据结构的
  let transformSumOut = [];
  let allDataStructure = [];
  _sum_out = Array.from(_sum_out)
  for (let yearItem of _sum_out) {
    let obj = {};
    let info = [];
    obj.year = yearItem.year;

    //职工人数
    let num1 = yearItem.info[0].value; // 职工人数
    info.push(num1);

    // 性别结构
    let num2 = 0; //男
    let num3 = 0; //女

    //年龄结构
    let num4 = 0; //25岁以下
    let num5 = 0; //26-35岁
    let num6 = 0; //36-45岁
    let num7 = 0; //46-55岁
    let num8 = 0; //56岁以上

    //学历结构
    let num9 = 0; //博士研究生
    let num10 = 0; //硕士研究生
    let num11 = 0; //本科
    let num12 = 0; //大专
    let num13 = 0; //大专以下

    //薪酬（元/月）
    // let num118 = 0; //3000以下
    // let num119 = 0; //3000-4000
    // let num120 = 0; //4000-5000
    // let num121 = 0; //5000-6000
    // let num122 = 0; //6000-8000
    // let num123 = 0; //8000-10000
    // let num124 = 0; //10000-12000
    // let num125 = 0; //12000-15000
    // let num126 = 0; //15000-20000
    // let num127 = 0; //20000以上

    yearItem.info[0].children.children.forEach(element => {
      let eachDataStructure = element;

      num2 += eachDataStructure.children[0].children[0].value;
      num3 += eachDataStructure.children[0].children[1].value;

      num4 += eachDataStructure.children[1].children[0].value;
      num5 += eachDataStructure.children[1].children[1].value;
      num6 += eachDataStructure.children[1].children[2].value;
      num7 += eachDataStructure.children[1].children[3].value;
      num8 += eachDataStructure.children[1].children[4].value;

      num9 += eachDataStructure.children[2].children[0].value;
      num10 += eachDataStructure.children[2].children[1].value;
      num11 += eachDataStructure.children[2].children[2].value;
      num12 += eachDataStructure.children[2].children[3].value;
      num13 += eachDataStructure.children[2].children[4].value;

      // num118 += eachDataStructure.children[3].children[0].value;
      // num119 += eachDataStructure.children[3].children[1].value;
      // num120 += eachDataStructure.children[3].children[2].value;
      // num121 += eachDataStructure.children[3].children[3].value;
      // num122 += eachDataStructure.children[3].children[4].value;
      // num123 += eachDataStructure.children[3].children[5].value;
      // num124 += eachDataStructure.children[3].children[6].value;
      // num125 += eachDataStructure.children[3].children[7].value;
      // num126 += eachDataStructure.children[3].children[8].value;
      // num127 += eachDataStructure.children[3].children[9].value;
    });
      

    info.push(num2);
    info.push(num3);
    info.push(num4);
    info.push(num5);
    info.push(num6);
    info.push(num7);
    info.push(num8);
    info.push(num9);
    info.push(num10);
    info.push(num11);
    info.push(num12);
    info.push(num13);

    // info.push(num118);
    // info.push(num119);
    // info.push(num120);
    // info.push(num121);
    // info.push(num122);
    // info.push(num123);
    // info.push(num124);
    // info.push(num125);
    // info.push(num126);
    // info.push(num127);



    obj.info = info;

    transformSumOut.push(obj)
  }

  // 返回格式化后的_summary
  return transformSumOut;
}