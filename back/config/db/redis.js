/**
 * Created by kevin on 16/12/13.
 */
var redis = require('redis')
var env = process.env.NODE_ENV || 'development';
// var env = 'local'
var config = require('../secrets')['redis'][env];
console.log('this is redis config',config)
bb.promisifyAll(redis);
var redisClient = redis.createClient(config.port,config.url)

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = redisClient;

