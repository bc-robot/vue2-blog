/**
 * Created by kevin on 16/12/7.
 */
// module.exports = require('../../../../gb-secrets')

module.exports = {
    my: {
        development: {
            database: 'blog',
            username: 'root',
            password: 'C',
            host: 'localhost'
        },
        production: {
            database: 'project',
            username: 'ecp',
            password: 'CqmygDsx2s_MYSQL',
            host: 'rdsvy6jrfrbi2a2.mysql.rds.aliyuncs.com'
        }
    },
    redis: {
        development: {
            port :6380,
            url: 'localhost'
        }
    }
}