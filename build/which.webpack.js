/**
 * Created by kevin on 16/12/14.
 */
if(process.env.NODE_ENV === 'production'){
    console.log(' production release - - - - - - - - - - - - - - - - - - ');
    module.exports = require('./webpack.prod.conf')
}else{
    console.log(' dev release - - - - - - - - - - - - - - - - - - ');
    module.exports = require('./webpack.dev.conf')
}