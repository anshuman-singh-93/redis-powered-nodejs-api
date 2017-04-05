var path=require('path');
var redis=require(path.resolve('redis/redis'));

var client=redis.getClient();
exports.getFriendListFromCache=function (req,res,next) {
    client.get(req.params.userId,function (err,result) {
        if(err){
            return next();
        }
        else{
            if(result){
                console.log('found in cache..returning from cahce');
                return res.send(JSON.parse(result));
            }
            else {
                console.log('nothing found from cache');
                return next();
            }
        }
    })
}

exports.savefriendListIntoCache=function (req,res,next) {
    console.log('now saving in cache');
    client.set(req.params.userId,JSON.stringify(res.data));
    return res.send(res.data);
}