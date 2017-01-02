/**
 * Created by kevin on 16/12/8.
 */
var db = require('../models');
var User = db.User;

module.exports.findById = function(id) {
    return db.sequelize.query(str,{plain : true,  raw : true});
}