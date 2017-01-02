/**
 * Created by kevin on 17/1/2.
 */
module.exports = getIP

function getIP() {
    return function *(next) {
        console.log(this.ip)
    }
}