/**
 * Created by kevin on 16/12/12.
 */
module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('User',
        {
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            nickname: {
                type: Sequelize.STRING
            },
            telephone: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING
            },
            // 实名验证
            status: {
                type: Sequelize.INTEGER,
                defaultValue : 0
            },
            created_at: {
                type:Sequelize.DATE
            },
            updated_at: {
                type:Sequelize.DATE
            },
            deleted_at: {
                type:Sequelize.DATE
            }
        },
        {
            'freezeTableName': true,
            'tableName': 'user',
            'timestamps': true,
            // 'createdAt': 'create_time',
            // 'updatedAt': false,
            // 将deletedAt字段改名
            // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            // 'deletedAt': 'dtime',
            'paranoid': true,
            defaultScope: {
                where: {
                    // username: 'dan'
                },
                limit: 12
            },
            classMethods: {
                associate: function(models) {
                    User.hasMany(models.Blog
                        // , {foreignKey: 'user_id'}
                        )
                }
            }
        });
    // model.removeAttribute('id');
    // model.sync({force:true});
    User.sync();
    return User;
}