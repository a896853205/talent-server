import  { db } from '../resources/db-connect';

export const userDao = {

  // 增加用户
  insertUser: async (_user_name, _user_password, _user_id_card) => {
    let collection = await db.get('company_users');

    return await collection.insert({_user_name, _user_password, _user_id_card});
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
  selectByName:async _user_name => {
    let collections = await db.get('company_users');

    return await collections.findOne({ _user_name });
  },

  // 通过idcard查找
  selectByCard:async _user_id_card => {
    let collections = await db.get('company_users');

    return await collections.findOne({ _user_id_card });
  }
}