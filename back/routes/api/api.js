/**
 * Created by kevin on 16/8/10.
 */
var Router = require('koa-router');
var request = require('co-request')

function register(app) {
    var router = new Router({
        prefix: '/api'
    });
    router.get('/send/test', function *() {
        this.body = RES.SUCCESS('getout of here');
    });

    /**
     * @api {post} /api/send 发送短信
     * @apiVersion 0.0.1
     * @apiName APIsend
     * @apiGroup API
     * @apiPermission none
     *
     * @apiDescription 短信发送描述. <br>
     *  ID：4242    通知客服有老师提出认证用户{1}联系电话{2}，希望认证成为{3}院校的教师，请您尽快登录网站后台进行审核。<br>
     *  ID：4240    成功认证为老师您希望认证为{1}教师的申请已经通过，接下来您可以随时登录我们的网站，快速发布课程设计、毕业设计或实验作业了！<br>
     *  ID：4230    用户注册验证码您的验证码是{1}，有效时间{2}分钟，请不要告诉他人，如非本人操作请忽略此短信。<br>
     *  ID：5038    成功认证为企业您希望认证为{1}企业的申请已经通过，接下来您可以随时登录我们的网站，轻松招聘或发布实习任务考验人才，数百院校高材生任你挑选，任何需求的产品免费为您开发！<br>
     *  ID：5032    通知客服有企业提出认证用户{1}联系电话{2}，希望认证成为{3}企业用户，请您尽快登录网站后台进行审核。<br>
     *
     * @apiParam {String} tel  phone NO.
     * @apiParam {Number} tpl_id  template ID.
     * @apiParam {Array} params  template content array.
     * @apiParam {String} exp  13位过期时间.
     *
     * @apiParamExample {json} Request-Example:
     *   {
     *     "tel": 11011912020,
     *     "tpl_id": 110,
     *     "params": ["验证码", "1234", "4"],
     *     "ext": "可选字段"  //可选字段，不需要就填空。用户的session内容，腾讯server回包中会原样返回
     *     "exp": "1000000000000"  // Data.now() + 1000
     *   }
     *
     *
     *
     * @apiParamExample {json} Success-Example
     *
     *   {
     *     status: { code: 0, httpcode: 200 },
     *     data:
     *       { result: '0',
     *         errmsg: 'OK',
     *         ext: '',
     *         sid: '8:Se9tJwqtwU9TjwIpq6T20161117',
     *         count: 1,
     *         fee: 2
     *       },
     *     msg: ''
     *   }
     *
     * @apiSuccess {String} status 成功状态
     * @apiSuccess {Json} data  服务器返回数据(result:0 发送成功).
     * @apiSuccess {String} msg  空(保留字段)
     *
     *
     *
     * @apiParamExample {json} Error-Example
     * {
     *   status:
     *   { code: -1, httpcode: 500 },
     *   data:
     *   {
     *       name: 'JsonWebTokenError',
     *       message: 'invalid signature'
     *   },
     *   msg: '验证出错'
     *  }
     *
     * @apiError {String} status 失败状态
     * @apiError {Json} data name(出错类型),message(出错信息)
     * @apiError {String} msg 服务器批注
     *
     */
    router.post('/send', function *() {

        this.body = 'RES.SUCCESS(body)';
    });


    router.get('/ip-to-weather', function *() {
        var headers = {
            'Content-Type': 'application/json',
            "X-Ca-Key":"23587608",
            "X-Ca-Stage":"RELEASE",
            "Authorization":"APPCODE 83220c3ce905410a9f29238c27867a49"
        }

// var data = {
//     area: '苏州',
//     areaid: 101190401,
//     month: 201601
// }
        var ip = '';
        var options = {
            // areaid
            // url: 'http://ali-weather.showapi.com/area-to-weather?areaid=101190401&need3HourForcast=0&needAlarm=0&needHourData=0&needIndex=0&needMoreDay=0',
            // ip
            url: 'http://ali-weather.showapi.com/ip-to-weather?ip=' + ip + '&need3HourForcast=0&needAlarm=0&needHourData=0&needIndex=0&needMoreDay=0',
            method: 'GET',
            headers: headers,
            // json: data
        }
        var result =  yield request(options);
        console.log(result.body)
    })
    /**
     * @api {post} /api/captcha 生成验证码
     * @apiVersion 0.0.1
     * @apiName APIcaptcha
     * @apiGroup API
     *
     * @apiDescription 注意可以不传参数,但是必须用jwt传输
     *
     * @apiParam {Number} size  验证码位数(NULL)
     * @apiParam {String} ignoreChars  不包含的字符(NULL)
     *
     *
     * @apiParamExample {json} Success-Example
     *
     *   {
     *     status: { code: 0, httpcode: 200 },
     *     data:
     *     {
     *       text: 'HjJu',
     *       captcha: 'svg'
     *     },
     *     msg: ''
     *   }
     *
     *
     * @apiSuccess {Json} data "text":"验证码", "captcha": "svg格式字符串"
     *
     *
     * @apiError {Json} status  "code": "-1"
     */
    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;