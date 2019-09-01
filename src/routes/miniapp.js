import { miniappDao } from "../dao/miniapp-dao";

const router = require("koa-router")();

router.get("/ping", async function(ctx, next) {
  ctx.body = "pong!";
});

router.get("/new_user", async (ctx, next) => {
  console.log("new user");
  const user_inserting = {
    _basic_status: false,
    _basic: {},
    _job_status: false,
    _job: {},
    _honor_status: false,
    _honor: {},
    _satisfaction_status: false,
    _satisfaction: {}
  };
  const result = await miniappDao.newUser(user_inserting);
  ctx.body = result._id;
});

router.get("/get_user_status", async (ctx, next) => {
  console.log("getting user status");
  const id = ctx.request.query.id;
  console.log("idid:", id);
  ctx.body = await miniappDao.getUserStatus(id);
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
  ctx.response.body = await miniappDao.upDateForm(id, type, form);
});

module.exports = router;
