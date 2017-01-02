/**
 * Created by kevin on 16/12/8.
 */
var db = require('../models');
var Enterprise = db.Enterprise;
var EnterpriseIntern = db.EnterpriseIntern;
var redisClient = require('../../config/db/redis');


module.exports.findEnterpriseInfoById = function *(id){

    var str = `
    SELECT 
    CASE
    WHEN a.truename IS NULL THEN e.nickname
    ELSE a.truename
    END
    AS username, e.smallAvatar AS thumurl
    from ecp.user AS e left join ecp.user_profile AS a on e.id = a.id where e.id = ${id};
    `;
    var user = yield db.sequelize.query(str, {plain : true,  raw : true});
    var enterprise = yield Enterprise.find({authorid:id});
    var enterpriseEntity = enterprise.get({plain:true});
    return _.merge(user,enterpriseEntity);
}

module.exports.UpdateEnterpriseWithId = function *(id,result) {
    console.log('in - -with id ,', id, result,'i am result')
    var et = yield Enterprise.upsert({
                id: result.id,
                logo: result.logo,
                brief: result.brief||''
            });
    // var enterprise = yield Enterprise.update(
    //     {
    //         logo: result.logo,
    //         brief: result.brief
    //     },
    //     {
    //        where: {
    //            id: {eq: id}
    //        }
    //     });
    return et;
}

module.exports.InternApplyEnterprise = function *(intern_id, enterprise_id, status){
    var ie = yield EnterpriseIntern.findOrCreate({
        where: {
            enterprise_id:enterprise_id,
            intern_id:intern_id,
        }
    });
    // findorcreate 第二个参数是否新建
    if(ie[1]) {
        return _.merge(ie[0].get({plain:true}),{isNewCreated: true});
    }else {
        return _.merge(ie[0].get({plain:true}),{isNewCreated: false});
    }

}

module.exports.GetInternsByEnterpriseID = function *(enterpriseid, page, pcount) {
    // SELECT id, name, qq, school, schoolid, thum
    var userSql = `
select eu.id,
eup.qq,
ps.name AS school,
pui.schoolid,
eu.smallAvatar AS thum,
(CASE WHEN eup.truename IS NULL THEN eu.nickname
ELSE eup.truename
END) name
from project.enterprise_intern AS pei     
        left join ecp.user AS eu 
        on pei.intern_id = eu.id 
left join project.user_identity AS pui on eu.identityid = pui.id
left join project.school AS ps on ps.id = pui.schoolid
left join ecp.user_profile AS eup on eup.id = eu.id
where 
pei.deleted_at IS NULL AND pei.status = 1 AND pei.enterprise_id = ${enterpriseid}
`
        // "SELECT `intern_id` FROM `project.enterprise_intern` AS `EnterpriseIntern` left join ecp.user WHERE (`EnterpriseIntern`.`deleted_at` IS NULL AND `EnterpriseIntern`.`enterprise_id` = ${id}) ORDER BY `EnterpriseIntern`.`created_at` DESC LIMIT 0, 8;"
    var user = yield db.sequelize.query(userSql);
    //     .spread(function(a){
    //     console.log(a,b)
    // });
    // var countSql = "SELECT count(*) AS `count` FROM `enterprise_intern` AS `EnterpriseIntern` WHERE (`EnterpriseIntern`.`deleted_at` IS NULL AND `EnterpriseIntern`.`enterprise_id` = '1')";
    // var count = yield db.sequelize.query(countSql, {plain : true,  raw : true});
    // sequelize.query('SELECT...').spread(function (results, metadata) {
    //     // Raw query - use spread
    // });
    //
    // sequelize.query('SELECT...', { type: sequelize.QueryTypes.SELECT }).then(function (results) {
    //     // SELECT query - use then
    // })
    var offset = 0;
    var count = 10;


    var searchTagIDs = function(user) {
        var zsetArgs = ['U_'+user['id'],'+inf','-inf','LIMIT',offset,count];
        return redisClient.zrevrangebyscoreAsync(zsetArgs);
    }

    var searchTagNameByIDArr = function(IDArr) {
        var tagsSql = `select name from project.tag where id in ${'('+IDArr.join(',')+')'}`;
        return db.sequelize.query(tagsSql);
    }

    db.sequelize.query(userSql).then(function(user) {
        console.log(user);
        return
    })

    // bb.each(user[0], function(user) {
    //     var zsetArgs = ['U_'+user['id'],'+inf','-inf','LIMIT',offset,count];
    //     console.log(user);
    //     return redisClient.zrevrangebyscoreAsync(zsetArgs);
    //     // var tagsSql = `select name from project.tag where id in ${'('+tagsArr.join(',')+')'}`
    //     // var tags = db.sequelize.query(tagsSql);
    //     // var tagNames = bb.map(tags[0], function(i){
    //     //     return i.name;
    //     // });
    //     // user['tags'] = tagNames;
    //     // console.log(user, 'this is user ', user['id']);
    //     // return user;
    // });

    console.log(dd, 'this is dd')




    // var offset =0;
    // var count = 10;
    // var args1 = ['U_1','+inf','-inf','LIMIT',offset,count];
    // var hredis = yield redisClient.zrevrangebyscoreAsync(args1);
    // console.log(hredis.toString(), 'this is hredis!')


//     var tagsSql = `
//     select name from project.tag where id in ${'('+hredis.join(',')+')'}
// `

    var tags = yield db.sequelize.query(tagsSql);
    var tagNames = tags[0].map(function(i){
        return i.name;
    });
    console.log(tags, 'this is tags- - - - -');

    // var ei = yield EnterpriseIntern.findAndCountAll({
    //     'limit': parseInt(pcount),                      // 每页多少条
    //     'offset': parseInt(pcount) * (parseInt(page) - 1),  // 跳过多少条
    //     where: {
    //         enterprise_id: enterpriseid
    //     },
    //     order: [
    //         ['created_at','DESC']
    //     ]
    // });
    return user[0];
}