/**
 * Created by kevin on 16/12/23.
 */
var Router = require('koa-router')
var UserService = require('../../services/controllers/user.ctrl')

function register(app) {
    var router = new Router({
        prefix: '/user'
    });

    router.get('/', function *(next) {

    });
    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;
