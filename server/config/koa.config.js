const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('../index.routes');
const logger = require('koa-logger');
const cors = require('@koa/cors');

const app = new Koa();
app.use(logger());
app.use(bodyParser());
app.use(cors());
app.use(router.routes());

module.exports = app;