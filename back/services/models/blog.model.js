/**
 * Created by kevin on 16/12/8.
 */

module.exports = function(sequelize, Sequelize) {
    var Blog = sequelize.define('Blog',
        {
            user_id: {
                type: Sequelize.INTEGER,
            },
            logo: {
                type: Sequelize.STRING
            },
            category: {
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            brief: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.TEXT
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
            'tableName': 'blog',
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
                    Blog.belongsTo(models.User, {
                        foreignKey: 'user_id'
                    })
                }
            }
        });
    Blog.sync();
    return Blog;
}