/**
 * Created by kevin on 16/12/7.
 */
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
// var env = 'local'
var config = require('../../config/secrets')['my'][env];
console.log(config,'this is myconfig');
var db = {};

// if(config.use_env_variable) {
//     var sequelize = new Sequelize(process.env[config.use_env_variable])
// } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 1000
        },
        timezone : "+08:00",
        define: {
            underscored: true
        }
    })
// }

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, file));
        console.log(model.name,' => model is loaded!')
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if(db[modelName].associate) {
        db[modelName].associate(db);
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;