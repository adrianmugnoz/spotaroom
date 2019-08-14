const homecardsRoutes = require('./app/homecards/homecards.routes');
const Router = require('koa-router');
const router = new Router({
  prefix: `/api`
});

/** GET /health-check - Check service health */
router.get('/health-check', async function(ctx, next){
  ctx.status = 200;
  ctx.body = 'ok'
});

router.use('/homecards', homecardsRoutes.routes());


module.exports = router;