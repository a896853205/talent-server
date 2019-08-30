export const option = {
  origin: function (ctx) {
    return "127.0.0.1"; // 允许来自所有域名请求
},
exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
maxAge: 5,
credentials: true,
allowMethods: ['GET', 'POST', 'DELETE'],
allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}

export const cors = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    
    await next();
}