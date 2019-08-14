const config = require('./config/app.config');
const app = require('./config/koa.config');

app.listen(config.port, function() {
    console.info(`server started on port ${config.port} (${config.env})`);
});

module.exports = app;