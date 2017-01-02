/**
 * Created by kevin on 16/12/8.
 */
var db = require('./models')

var Enterprise = db.Enterprise;

Enterprise.findById(1).then(function(_enterprise) {
    console.log(_enterprise, 'this is enterprise');
})