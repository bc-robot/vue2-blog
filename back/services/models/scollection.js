/**
 * Created by kevin on 16/12/12.
 */
module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define('Scollection',
        {
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.STRING
            },
            count: {
                type: Sequelize.INTEGER
            },
            url: {
                type: Sequelize.STRING
            },
            tecdir: {
                type: Sequelize.INTEGER
            },
            enterpriseid: {
                type: Sequelize.INTEGER
            },
            starttime: {
                type: Sequelize.DATE
            },
            endtime: {
                type: Sequelize.DATE
            }
        },
        {
            'freezeTableName': true,
            'tableName': 'scollection',
            'timestamps': false,
            // 'createdAt': 'create_time',
            // 'updatedAt': false,
            // 将deletedAt字段改名
            // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            // 'deletedAt': 'dtime',
            // 'paranoid': true,
            defaultScope: {
                where: {
                    // username: 'dan'
                },
                limit: 12
            },
        });
    return model;
}