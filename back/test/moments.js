/**
 * Created by kevin on 16/12/9.
 */
var moment = require('moment')
var aa = moment.utc('2016-12-09 07:26:29').format("YYYY-MM-DD HH:mm:ss");
var bb = new Date('2016-12-09 07:26:29').toUTCString();

var cc = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
console.log(aa,bb,cc)


var LOCALTIME = new Date('2016-12-09 07:26:29'+"UTC");
console.log(LOCALTIME)