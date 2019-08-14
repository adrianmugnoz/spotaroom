const homecardsCtrl = require('./homecards.controller');
const Router = require('koa-router');
const router = new Router();

router
  .get('/', homecardsCtrl.handleEndpointGet);

module.exports = router;