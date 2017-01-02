/**
 * Created by kevin on 16/12/8.
 */
var Router = require('koa-router');
var enterpriseService = require('../../services/controllers/enterprise.ctrl')
var userService = require('../../services/controllers/user.ctrl')

function register(app) {
    var router = new Router({
        prefix: '/enterprises'
    });
    router
        .get('/mine', function *(next) {
            try{
                var uid = this.jwt_auth_result.uid
                var enterprisei = yield *enterpriseService.findEnterpriseInfoById(uid);
                return this.body = RES.SUCCESS(enterprisei,'返回成功');
            }catch (err) {
                return this.body = RES.SUCCESS({err:err},'返回失败');
            }
        })
        .post('/', function *(next) {
            this.body = 'post'
        })
        .put('/:id', function *(next) {
            console.log(this.params.id, 'this is put id')
            var enterpriseid = this.params.id;
            var enterprise_u = yield * enterpriseService.UpdateEnterpriseWithId(enterpriseid,this.jwt_auth_result);
            this.body = RES.SUCCESS(enterprise_u,'返回成功');
        })
        .del('/:id', function *(next) {
            this.body = 'del'
        })

    router
        .get('/:eid/interns/page_pcount/:page/:pcount',function *(next) {
            var enterpriseid = this.params.eid;
            var page = this.params.page;
            var pcount = this.params.pcount;
            try{
                var es = yield * enterpriseService.GetInternsByEnterpriseID(enterpriseid,page,pcount);
                this.body = RES.SUCCESS(es,'返回成功');
            }catch (e){
                return this.body = RES.SUCCESS({err:e},'返回失败');
            }
        })
        .post('/interns', function *(next) {
            var intern_enterprise;
            var intern_id;
            var enterprise_id;
            try{
                intern_id = this.jwt_auth_result.uid
                enterprise_id = this.jwt_auth_result.enterpriseid
                intern_enterprise = yield *enterpriseService.InternApplyEnterprise(intern_id, enterprise_id);
                console.log(intern_enterprise);
                this.body = RES.SUCCESS(intern_enterprise,'返回成功');
            }catch (e){
                this.body = RES.ERROR(e,'返回失败');
            }
        })
        .put('/:eid/interns/iid', function *(next) {

    })
    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;