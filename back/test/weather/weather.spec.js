/**
 * Created by kevin on 17/1/2.
 */
var co = require('co')
var request = require('co-request')
var headers = {
    'Content-Type': 'application/json',
    "X-Ca-Key":"23587608",
    "X-Ca-Stage":"RELEASE",
    "Authorization":"APPCODE 83220c3ce905410a9f29238c27867a49"
}

// var data = {
//     area: '苏州',
//     areaid: 101190401,
//     month: 201601
// }

var options = {
    // areaid
    // url: 'http://ali-weather.showapi.com/area-to-weather?areaid=101190401&need3HourForcast=0&needAlarm=0&needHourData=0&needIndex=0&needMoreDay=0',
    // ip
    url: 'http://ali-weather.showapi.com/ip-to-weather?ip=223.5.5.5&need3HourForcast=0&needAlarm=0&needHourData=0&needIndex=0&needMoreDay=0',
    method: 'GET',
    headers: headers,
    // json: data
}

co(function *() {
    var result =  yield request(options)
    console.log(result.body)

}).catch(function(err) {
    console.err(err)
})