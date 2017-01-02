/**
 * Created by kevin on 16/12/9.
 */
var _ = require('lodash')

var ab = _.merge({a:'a'},{a:'c',b:'b'})
console.log(ab)

var a = {
    a:'a'
}
var b = {
    a:'b',
    b: 'b'
}
console.log(Object.assign({},b,a));