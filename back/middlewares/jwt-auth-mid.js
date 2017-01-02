/**
 * Created by kevin on 16/11/17.
 */
var gb_secrets = require('../../../gb-secrets/gb-dx');
var jwt_auth = require('./lib/jwt_auth');
var jwt_secret = gb_secrets.jwt_secret;

module.exports = jwtAuthMid;

function jwtAuthMid() {
    return function *jwtAuthMid(next){
        console.log(this.ips,this.ip, 'this is the ip info!',this.request.ip)
        if(this.path.indexOf('test') >=0) {
            yield *next;
        }else {
            var error_msg = '';
            var jwt_auth_result = '';
            yield jwt_auth(this,jwt_secret)
            .then(function(val) {
                // console.log(val, 'set jwt token!!!');
                jwt_auth_result = val;
            }).catch(function(err){
                error_msg = err;
            });

            // console.log(error_msg, jwt_auth_result, ' - - - - - - - - - - - - - - - - - - - - - - - - ');
            if(jwt_auth_result){
                // console.log(jwt_auth_result, 'this is middleware<<<<<<');
                this.jwt_auth_result = jwt_auth_result;
                yield *next;
            } else if(error_msg) {
                // return this.body = {
                //     status: {
                //         code: -1,
                //         httpcode: ''
                //     },
                //     data: {
                //         msg: error_msg
                //     }
                // }
                return this.body = RES.ERROR(error_msg, '验证出错');
            }
        }
    }
}