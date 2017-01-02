/**
 * Created by kevin on 16/8/10.
 */
var Router = require('koa-router');
var crypto = require('crypto');

function register (app) {
    var router = new Router();

    router.get('/', function *(){
        this.body = 'Home Page';
    }); // responds to "/"

    router.post('/abc', function *(){
        console.log(this.jwt_auth_result,' this is - - -result');
        this.body = 'Home Page';
    }); // responds to "/"

    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;