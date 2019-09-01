import { db } from "../resources/db-connect";

export const miniappDao = {
  newUser: async userInserting => {
    let collections = db.get("forms");
    return await collections.insert(userInserting);
  },
  getUserStatus: async userId => {
    let collections = db.get("forms");
    return await collections.findOne({ _id: userId });
  },
  upDateForm: async (userId, formType, formValue) => {
    let collections = db.get("forms");
    switch (formType) {
      case "basic":
        const update_basic = await collections.update(
          {
            _id: userId
          },
          {
            $set: {
              _basic_status: true,
              _basic: JSON.parse(formValue)
            }
          }
        );
        return 666;
        break;
      case "job":
        const update_job = await collections.update(
          {
            _id: userId
          },
          {
            $set: {
              _job_status: true,
              _job: JSON.parse(formValue)
            }
          }
        );
        return 666;
        break;
      case "honor":
        const update_honor = await collections.update(
          {
            _id: userId
          },
          {
            $set: {
              _honor_status: true,
              _honor: JSON.parse(formValue)
            }
          }
        );
        return 666;
        break;
      case "satisfaction":
        const update_satisfaction = await collections.update(
          {
            _id: userId
          },
          {
            $set: {
              _satisfaction_status: true,
              _satisfaction: JSON.parse(formValue)
            }
          }
        );
        return 666;
        break;
    }
  }
};
