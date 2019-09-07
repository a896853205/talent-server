export const summaryTransform = _summary => {
  // 这里是转换_summary的数据结构的
  let transformSummary = [];

  _summary = Array.from(_summary)
  for (let yearItem of _summary) {
    let obj = {};
    let info = [];
    obj.year = yearItem.year;

    //职工人数
    let num1 = yearItem.info[0].value; // 职工人数

    //当年年度产值（万元）
    let num128 = yearItem.info[1].value;;

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

    let num14 = 0;
    let num15 = 0;
    let num16 = 0;
    let num17 = 0;


    let num18 = 0;
    let num19 = 0;

    let num20 = 0;
    let num21 = 0;
    let num22 = 0;
    let num23 = 0;
    let num24 = 0;
    let num25 = 0;
    let num26 = 0;
    let num27 = 0;
    let num28 = 0;
    let num29 = 0;

    let num30 = 0;
    let num31 = 0;
    let num32 = 0;
    let num33 = 0;
    let num34 = 0;
    let num35 = 0;
    let num36 = 0;
    let num37 = 0;
    let num38 = 0;
    let num39 = 0;

    let num40 = 0;
    let num41 = 0;
    let num42 = 0;
    let num43 = 0;
    let num44 = 0;
    let num45 = 0;
    let num46 = 0;
    let num47 = 0;
    let num48 = 0;
    let num49 = 0;

    let num50 = 0;
    let num51 = 0;
    let num52 = 0;
    let num53 = 0;
    let num54 = 0;
    let num55 = 0;
    let num56 = 0;
    let num57 = 0;
    let num58 = 0;
    let num59 = 0;

    let num60 = 0;
    let num61 = 0;
    let num62 = 0;
    let num63 = 0;
    let num64 = 0;
    let num65 = 0;
    let num66 = 0;
    let num67 = 0;
    let num68 = 0;
    let num69 = 0;

    let num70 = 0;
    let num71 = 0;
    let num72 = 0;
    let num73 = 0;
    let num74 = 0;
    let num75 = 0;
    let num76 = 0;
    let num77 = 0;
    let num78 = 0;
    let num79 = 0;

    let num80 = 0;
    let num81 = 0;
    let num82 = 0;
    let num83 = 0;
    let num84 = 0;
    let num85 = 0;
    let num86 = 0;
    let num87 = 0;
    let num88 = 0;
    let num89 = 0;

    let num90 = 0;
    let num91 = 0;
    let num92 = 0;
    let num93 = 0;
    let num94 = 0;
    let num95 = 0;
    let num96 = 0;
    let num97 = 0;
    let num98 = 0;
    let num99 = 0;

    let num100 = 0;
    let num101 = 0;
    let num102 = 0;
    let num103 = 0;
    let num104 = 0;
    let num105 = 0;
    let num106 = 0;
    let num107 = 0;
    let num108 = 0;
    let num109 = 0;

    let num110 = 0;
    let num111 = 0;
    let num112 = 0;
    let num113 = 0;
    let num114 = 0;
    let num115 = 0;
    let num116 = 0;

    let num117 = 0;

    //薪酬（元/月）
    let num118 = 0; //3000以下
    let num119 = 0; //3000-4000
    let num120 = 0; //4000-5000
    let num121 = 0; //5000-6000
    let num122 = 0; //6000-8000
    let num123 = 0; //8000-10000
    let num124 = 0; //10000-12000
    let num125 = 0; //12000-15000
    let num126 = 0; //15000-20000
    let num127 = 0; //20000以上



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

      num118 += eachDataStructure.children[3].children[0].value;
      num119 += eachDataStructure.children[3].children[1].value;
      num120 += eachDataStructure.children[3].children[2].value;
      num121 += eachDataStructure.children[3].children[3].value;
      num122 += eachDataStructure.children[3].children[4].value;
      num123 += eachDataStructure.children[3].children[5].value;
      num124 += eachDataStructure.children[3].children[6].value;
      num125 += eachDataStructure.children[3].children[7].value;
      num126 += eachDataStructure.children[3].children[8].value;
      num127 += eachDataStructure.children[3].children[9].value;
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

    // yearItem.info[0].children.inputChildren.forEach(inputItem => {
    //   info.push(inputItem.value);
    // })
    yearItem.info[0].children.children.forEach(eachClass => {
      switch (eachClass.prop) {
        case '企业经营管理人员':
          let n14Enterprise = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '出资人代表');
          });
          if (n14Enterprise) num14 = n14Enterprise.num;
          let n15Enterprise = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '经营管理人员');
          });
          if (n15Enterprise) num15 = n15Enterprise.num;
          let n16Enterprise = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '党群工作者');
          });
          if (n16Enterprise) num16 = n16Enterprise.num;
          let n17Enterprise = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '其他');
          });
          if (n17Enterprise) num17 = n17Enterprise.num;
          break;
        case '管理人员':
          let n14 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '省部级');
          });
          if (n14) num14 = n14.num;
          let n15 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '厅局级');
          });
          if (n15) num15 = n15.num;
          let n16 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '县处级');
          });
          if (n16) num16 = n16.num;
          let n17 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '乡科级');
          });
          if (n17) num17 = n17.num;
          let n18 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '科员');
          });
          if (n18) num18 = n18.num;
          let n19 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '其他');
          });
          if (n19) num19 = n19.num;
          break;
        case '专业技术人员':
          // 工程技术人员 20-24
          let n20_24 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '工程技术人员');
          });
          // 农业技术人员 25-29
          let n25_29 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '农业技术人员');
          });
          // 科学研究人员 30-34
          let n30_34 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '科学研究人员');
          });
          // 卫生技术人员 35-39
          let n35_39 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '卫生技术人员');
          });
          // 教学人员 40-44
          let n40_44 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '教学人员');
          });
          // 经济人员 45-49
          let n45_49 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '经济人员');
          });
          // 会计人员 50-54
          let n50_54 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '会计人员');
          });
          // 统计人员 55-59
          let n55_59 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '统计人员');
          });
          // 翻译人员 60-64
          let n60_64 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '翻译人员');
          });
          // 图书档案、文博人员 65-69
          let n65_69 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '图书档案、文博人员');
          });
          // 新闻、出版人员 70-74
          let n70_74 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '新闻、出版人员');
          });
          // 律师、公证人员 75-79
          let n75_79 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '律师、公证人员');
          });
          // 播音人员 80-84
          let n80_84 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '播音人员');
          });
          // 工艺美术人员 85-89
          let n85_89 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '工艺美术人员');
          });
          // 体育人员 90-94
          let n90_94 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '体育人员');
          });
          // 艺术人员 95-99
          let n95_99 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '艺术人员');
          });
          // 其他人员 100-104
          let n100_104 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '其他人员');
          });

          if (n20_24) {
            switch (n20_24.cas[1]) {
              case '正高级':
                num20 = n20_24.num;
                break;
              case '副高级':
                num21 = n20_24.num;
                break;
              case '中级':
                num22 = n20_24.num;
                break;
              case '初级':
                num23 = n20_24.num;
                break;
              case '无':
                num24 = n20_24.num;
                break;
            }
          }

          if (n25_29) {
            switch (n25_29.cas[1]) {
              case '正高级':
                num25 = n25_29.num;
                break;
              case '副高级':
                num26 = n25_29.num;
                break;
              case '中级':
                num27 = n25_29.num;
                break;
              case '初级':
                num28 = n25_29.num;
                break;
              case '无':
                num29 = n25_29.num;
                break;
            }
          }

          if (n30_34) {
            switch (n30_34.cas[1]) {
              case '正高级':
                num30 = n30_34.num;
                break;
              case '副高级':
                num31 = n30_34.num;
                break;
              case '中级':
                num32 = n30_34.num;
                break;
              case '初级':
                num33 = n30_34.num;
                break;
              case '无':
                num34 = n30_34.num;
                break;
            }
          }

          if (n35_39) {
            switch (n35_39.cas[1]) {
              case '正高级':
                num35 = n35_39.num;
                break;
              case '副高级':
                num36 = n35_39.num;
                break;
              case '中级':
                num37 = n35_39.num;
                break;
              case '初级':
                num38 = n35_39.num;
                break;
              case '无':
                num39 = n35_39.num;
                break;
            }
          }

          if (n40_44) {
            switch (n40_44.cas[1]) {
              case '正高级':
                num40 = n40_44.num;
                break;
              case '副高级':
                num41 = n40_44.num;
                break;
              case '中级':
                num42 = n40_44.num;
                break;
              case '初级':
                num43 = n40_44.num;
                break;
              case '无':
                num44 = n40_44.num;
                break;
            }
          }

          if (n45_49) {
            switch (n45_49.cas[1]) {
              case '正高级':
                num45 = n45_49.num;
                break;
              case '副高级':
                num46 = n45_49.num;
                break;
              case '中级':
                num47 = n45_49.num;
                break;
              case '初级':
                num48 = n45_49.num;
                break;
              case '无':
                num49 = n45_49.num;
                break;
            }
          }

          if (n50_54) {
            switch (n50_54.cas[1]) {
              case '正高级':
                num50 = n50_54.num;
                break;
              case '副高级':
                num51 = n50_54.num;
                break;
              case '中级':
                num52 = n50_54.num;
                break;
              case '初级':
                num53 = n50_54.num;
                break;
              case '无':
                num54 = n50_54.num;
                break;
            }
          }

          if (n55_59) {
            switch (n55_59.cas[1]) {
              case '正高级':
                num55 = n55_59.num;
                break;
              case '副高级':
                num56 = n55_59.num;
                break;
              case '中级':
                num57 = n55_59.num;
                break;
              case '初级':
                num58 = n55_59.num;
                break;
              case '无':
                num59 = n55_59.num;
                break;
            }
          }

          if (n60_64) {
            switch (n60_64.cas[1]) {
              case '正高级':
                num60 = n60_64.num;
                break;
              case '副高级':
                num61 = n60_64.num;
                break;
              case '中级':
                num62 = n60_64.num;
                break;
              case '初级':
                num63 = n60_64.num;
                break;
              case '无':
                num64 = n60_64.num;
                break;
            }
          }

          if (n65_69) {
            switch (n65_69.cas[1]) {
              case '正高级':
                num65 = n65_69.num;
                break;
              case '副高级':
                num66 = n65_69.num;
                break;
              case '中级':
                num67 = n65_69.num;
                break;
              case '初级':
                num68 = n65_69.num;
                break;
              case '无':
                num69 = n65_69.num;
                break;
            }
          }

          if (n70_74) {
            switch (n70_74.cas[1]) {
              case '正高级':
                num70 = n70_74.num;
                break;
              case '副高级':
                num71 = n70_74.num;
                break;
              case '中级':
                num72 = n70_74.num;
                break;
              case '初级':
                num73 = n70_74.num;
                break;
              case '无':
                num74 = n70_74.num;
                break;
            }
          }

          if (n75_79) {
            switch (n75_79.cas[1]) {
              case '正高级':
                num75 = n75_79.num;
                break;
              case '副高级':
                num76 = n75_79.num;
                break;
              case '中级':
                num77 = n75_79.num;
                break;
              case '初级':
                num78 = n75_79.num;
                break;
              case '无':
                num79 = n75_79.num;
                break;
            }
          }

          if (n80_84) {
            switch (n80_84.cas[1]) {
              case '正高级':
                num80 = n80_84.num;
                break;
              case '副高级':
                num81 = n80_84.num;
                break;
              case '中级':
                num82 = n80_84.num;
                break;
              case '初级':
                num83 = n80_84.num;
                break;
              case '无':
                num84 = n80_84.num;
                break;
            }
          }

          if (n85_89) {
            switch (n85_89.cas[1]) {
              case '正高级':
                num85 = n85_89.num;
                break;
              case '副高级':
                num86 = n85_89.num;
                break;
              case '中级':
                num87 = n85_89.num;
                break;
              case '初级':
                num88 = n85_89.num;
                break;
              case '无':
                num89 = n85_89.num;
                break;
            }
          }

          if (n90_94) {
            switch (n90_94.cas[1]) {
              case '正高级':
                num90 = n90_94.num;
                break;
              case '副高级':
                num91 = n90_94.num;
                break;
              case '中级':
                num92 = n90_94.num;
                break;
              case '初级':
                num93 = n90_94.num;
                break;
              case '无':
                num94 = n90_94.num;
                break;
            }
          }

          if (n95_99) {
            switch (n95_99.cas[1]) {
              case '正高级':
                num95 = n95_99.num;
                break;
              case '副高级':
                num96 = n95_99.num;
                break;
              case '中级':
                num97 = n95_99.num;
                break;
              case '初级':
                num98 = n95_99.num;
                break;
              case '无':
                num99 = n95_99.num;
                break;
            }
          }

          if (n100_104) {
            switch (n100_104.cas[1]) {
              case '正高级':
                num100 = n100_104.num;
                break;
              case '副高级':
                num101 = n100_104.num;
                break;
              case '中级':
                num102 = n100_104.num;
                break;
              case '初级':
                num103 = n100_104.num;
                break;
              case '无':
                num104 = n100_104.num;
                break;
            }
          }


          break;
        case '技能人员':

          let n105 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '职业资格一级（高级技师）');
          });
          if (n105) num105 = n105.num;

          let n106 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '职业资格二级（技师）');
          });
          if (n106) num106 = n106.num;

          let n107 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '职业资格三级（高级）');
          });
          if (n107) num107 = n107.num;

          let n108 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '职业资格四级（中级）');
          });
          if (n108) num108 = n108.num;

          let n109 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '职业资格五级（初级）');
          });
          if (n109) num109 = n109.num;

          let n110 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '无');
          });
          if (n110) num110 = n110.num;

          break;
        case '农村实用人员':

          let n111 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '生产型人才');
          });
          if (n111) num111 = n111.num;

          let n112 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '经营型人才');
          });
          if (n112) num112 = n112.num;

          let n113 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '技能服务型人才');
          });
          if (n113) num113 = n113.num;

          let n114 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '技能带动型人才');
          });
          if (n114) num114 = n114.num;

          let n115 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '社会服务型人才');
          });
          if (n115) num115 = n115.num;

          let n116 = eachClass.children[4].value.find(eachTwoClass => {
            return (eachTwoClass.cas[0] === '社会工作人员');
          });
          if (n116) num116 = n116.num;

          break;
        case '其他':

          num117 = yearItem.info[0].children.inputChildren[4].value;
          break;
      }
    })

    info.push(num14);
    info.push(num15);
    info.push(num16);
    info.push(num17);
    info.push(num18);
    info.push(num19);

    info.push(num20);
    info.push(num21);
    info.push(num22);
    info.push(num23);
    info.push(num24);
    info.push(num25);
    info.push(num26);
    info.push(num27);
    info.push(num28);
    info.push(num29);

    info.push(num30);
    info.push(num31);
    info.push(num32);
    info.push(num33);
    info.push(num34);
    info.push(num35);
    info.push(num36);
    info.push(num37);
    info.push(num38);
    info.push(num39);

    info.push(num40);
    info.push(num41);
    info.push(num42);
    info.push(num43);
    info.push(num44);
    info.push(num45);
    info.push(num46);
    info.push(num47);
    info.push(num48);
    info.push(num49);

    info.push(num50);
    info.push(num51);
    info.push(num52);
    info.push(num53);
    info.push(num54);
    info.push(num55);
    info.push(num56);
    info.push(num57);
    info.push(num58);
    info.push(num59);

    info.push(num60);
    info.push(num61);
    info.push(num62);
    info.push(num63);
    info.push(num64);
    info.push(num65);
    info.push(num66);
    info.push(num67);
    info.push(num68);
    info.push(num69);

    info.push(num70);
    info.push(num71);
    info.push(num72);
    info.push(num73);
    info.push(num74);
    info.push(num75);
    info.push(num76);
    info.push(num77);
    info.push(num78);
    info.push(num79);

    info.push(num80);
    info.push(num81);
    info.push(num82);
    info.push(num83);
    info.push(num84);
    info.push(num85);
    info.push(num86);
    info.push(num87);
    info.push(num88);
    info.push(num89);

    info.push(num90);
    info.push(num91);
    info.push(num92);
    info.push(num93);
    info.push(num94);
    info.push(num95);
    info.push(num96);
    info.push(num97);
    info.push(num98);
    info.push(num99);

    info.push(num100);
    info.push(num101);
    info.push(num102);
    info.push(num103);
    info.push(num104);

    info.push(num105);
    info.push(num106);
    info.push(num107);
    info.push(num108);
    info.push(num109);
    info.push(num110);

    info.push(num111);
    info.push(num112);
    info.push(num113);
    info.push(num114);
    info.push(num115);
    info.push(num116);

    info.push(num117);

    info.push(num118);
    info.push(num119);
    info.push(num120);
    info.push(num121);
    info.push(num122);
    info.push(num123);
    info.push(num124);
    info.push(num125);
    info.push(num126);
    info.push(num127);
    info.push(num128);


    obj.info = info;

    transformSummary.push(obj)
  }

  // 返回格式化后的_summary
  return transformSummary;
}