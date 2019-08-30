import  { db } from '../resources/db-connect';
import { form_inserting } from '../resources/db-init/data';

export const formDao = {
  // 初始化表单
  initFrom: async user_id => {
    let form_collection = await db.get('company_forms');
    form_inserting._from_user = user_id.toString();

    return await form_collection.insert(form_inserting);
  },

  /**
   * 获取form数据
   */
  getCompanyForm: async user_id => {
    if (user_id === -1 || user_id === -2) {
      return -1;
    } else {
      let collection = await db.get('company_forms');
      return await collection.findOne({ _from_user: user_id.toString() });
    }
  }
}