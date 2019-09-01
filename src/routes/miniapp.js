import { db } from "../resources/db-connect";

const router = require("koa-router")();

router.get("/ping", async function(ctx, next) {
  ctx.body = "pong!";
});

router.get("/new_user", async (ctx, next) => {
  var collections = db.get("forms");
  console.log("new user");
  var user_inserting = {
    _basic_status: false,
    _basic: {},
    _job_status: false,
    _job: {},
    _honor_status: false,
    _honor: {},
    _satisfaction_status: false,
    _satisfaction: {}
  };
  const result = await collections.insert(user_inserting);
  console.log(result);
  ctx.body = result._id;
});

router.get("/get_user_status", async (ctx, next) => {
  console.log("getting user status");
  var id = ctx.request.query.id;
  console.log("idid:", id);
  var collections = db.get("forms");
  var user = await collections.findOne({ _id: id });
  console.log(user);
  ctx.body = user;
});

router.post("/post_test", async (ctx, next) => {
  const rb = ctx.request;
  console.log("post test", rb.body);
  ctx.response.body = "success";
});

router.post("/submit_form_post", async (ctx, next) => {
  const id = ctx.request.body.id;
  const type = ctx.request.body.type;
  const form = ctx.request.body.form;
  var collections = db.get("forms");
  switch (type) {
    case "basic":
      const update_basic = await collections.update(
        {
          _id: id
        },
        {
          $set: {
            _basic_status: true,
            _basic: JSON.parse(form)
          }
        }
      );
      ctx.response.body = 666;
      break;
    case "job":
      const update_job = await collections.update(
        {
          _id: id
        },
        {
          $set: {
            _job_status: true,
            _job: JSON.parse(form)
          }
        }
      );
      ctx.response.body = 666;
      break;
    case "honor":
      const update_honor = await collections.update(
        {
          _id: id
        },
        {
          $set: {
            _honor_status: true,
            _honor: JSON.parse(form)
          }
        }
      );
      ctx.response.body = 666;
      break;
    case "satisfaction":
      const update_satisfaction = await collections.update(
        {
          _id: id
        },
        {
          $set: {
            _satisfaction_status: true,
            _satisfaction: JSON.parse(form)
          }
        }
      );
      ctx.response.body = 666;
      break;
  }
});

module.exports = router;