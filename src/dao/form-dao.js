import  { db } from '../resources/db-connect';

export const formDao = {
  // 初始化表单
  initFrom: async (user_id, form) => {
    let form_collection = await db.get('company_forms');
    form._from_user = user_id.toString();

    return await form_collection.insert(form);
  },

  /**
   * 获取form数据
   */
  getCompanyForm: async user_id => {
    if (user_id) {
      if (user_id === -1 || user_id === -2) {
        return -1;
      } else {
        let collection = await db.get('company_forms');
        
        return await collection.findOne({ _from_user: user_id.toString() });
      }
    } else {
      return;
    }
  },

  /**
   * 表格提交
   */
  companyFormSave: async data => {
    let collection = await db.get('company_forms');

    return await collection.update({ _id: data._id }, { $set: data });
  }
}