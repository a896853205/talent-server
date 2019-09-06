import { db } from '../resources/db-connect';

export const userDao = {

  // 增加用户
  insertUser: async (companyName, userRole, subUserCode) => {
    let collection = await db.get('company_users');
    let roleNum = -1,
      distributionRole = false,
      writeRole = false;

    distributionRole = userRole.includes('分配用户权限')
    writeRole = userRole.includes('填报权限');

    if (distributionRole && writeRole) {
      roleNum = 2;
    } else if (distributionRole) {
      roleNum = 1;
    } else if (writeRole) {
      roleNum = 0;
    }

    return await collection.insert({
      _user_name: subUserCode,
      _user_password: '123456',
      _user_code: subUserCode,
      _submit_status: 0,
      _company_name: companyName,
      _user_role: roleNum
    });
  },

  // 获取userid
  getUserId: async (user_name, user_password) => {
    let collection = await db.get('company_users'),
      user = await collection.findOne({ _user_name: user_name });

    if (!user) {
      return -1;
    }

    if (user._user_password !== user_password) {
      return -2;
    }

    return user._id;
  },

  // 通过用户名查找
  selectByName: async _user_name => {
    let collections = await db.get('company_users');

    return await collections.findOne({ _user_name });
  },

  // 通过idcard查找
  selectByCard: async _user_id_card => {
    let collections = await db.get('company_users');

    return await collections.findOne({ _user_id_card });
  },

  // 通过唯一id查找
  selectByUserId: async _id => {
    let collections = await db.get('company_users');

    return await collections.findOne({ _id });
  },

  // 验证用户
  verifyUser: async (userName, userPassword, role) => {
    let collection = await db.get('company_users'),
      user = await collection.findOne({ _user_name: userName });

    if (!user || (user._user_password !== userPassword)) {
      return;
    }

    // 判断是否拥有权限或者是超级账户
    if (user._user_role !== 2 && user._user_role !== role) {
      return;
    }

    return user;
  },

  // 生成userCode
  initUserCode: async userId => {
    let collections = await db.get('company_users');
    let user = await collections.findOne({ _id: userId });

    let userCodeArr = [], // 下属
      subUser = [], // 下属
      codeNum = 0;

    // 判断有效长度
    for (let userCodeIndex = 0; userCodeIndex <= 12; userCodeIndex += 4) {
      userCodeArr.push(user._user_code.substr(userCodeIndex, 4));
    }
    let length = userCodeArr.findIndex(userCodeItem => {
      return (userCodeItem === '0000');
    }) * 4;

    subUser = await userDao.querySubUser(user._user_code);

    if (subUser.length) {
      // 找到最大的下属+1
      codeNum = parseInt(subUser[subUser.length - 1]._user_code.substr(length, 4));
      codeNum++;

      if (codeNum < 10) {
        codeNum = '000' + codeNum;
      } else if (codeNum < 100) {
        codeNum = '00' + codeNum;
      } else if (codeNum < 1000) {
        codeNum = '0' + codeNum;
      } else {
        codeNum = '' + codeNum
      }

      return `${subUser[0]._user_code.substr(0, length)}${codeNum}${subUser[0]._user_code.substr(length + 4)}`;
    } else {
      // 当前没有下属
      return `${user._user_code.substr(0, length)}0001${user._user_code.substr(length + 4)}`;
    }
  },

  // 根据userCode获取当前用户下属数据
  querySubUser: async userCode => {
    let collections = await db.get('company_users'),
    allUser = await collections.find({}, { sort: '_user_code' });
    let userCodeArr = []; // 下属

    // 判断有效长度
    for (let userCodeIndex = 0; userCodeIndex <= 12; userCodeIndex += 4) {
      userCodeArr.push(userCode.substr(userCodeIndex, 4));
    }
    let length = userCodeArr.findIndex(userCodeItem => {
      return (userCodeItem === '0000');
    }) * 4;

    // 获取下属
    return allUser.filter(suUser => (suUser._user_code.substr(0, length) === userCode.substr(0, length)));
  },

  // 向上级部门提交
  submitManage: async userId => {
    let collections = await db.get('company_users');
    
    collections.update({ _id: userId }, { _submit_status: 1 });
  }
}