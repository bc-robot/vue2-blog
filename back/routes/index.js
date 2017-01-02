/**
 * Created by kevin on 16/8/10.
 */
// const fs = require('co-fs');
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);



function register(app){
    var dirname = 'api';
    console.log(__dirname+'/'+dirname);

    fs.readdirSync(__dirname+'/'+dirname)
        .filter(function(file) {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(function(file) {
            require('./' +dirname+'/'+ file)(app)
        });

    // fs.readdir(__dirname+'/'+dirname,function(err,files){
    //     if(err){
    //         console.log('read dir error');
    //         log.router('read dir error');
    //     }else{
    //         files.forEach(function(item){
    //             //console.log('./'+dirname+'/'+item);
    //             require('./'+dirname+'/'+item)(app);
    //             //console.log(item,' required!');
    //         });
    //     }
    // });
}

module.exports = register;