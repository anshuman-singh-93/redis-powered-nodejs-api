var redis=require('redis');

var client;

module.exports.init=function (callback) {
     client=redis.createClient();
    client.on("error", function (err) {
        console.log("Error " + err);
    });

    client.on("ready", function (err) {
        console.info('connected to redis server');
        if(callback){
            return callback();
        }
    });


}


module.exports.getClient=function () {
    return client;
}