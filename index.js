var express=require('express');
var reseponseTime=require('response-time');
var app= express();
var path=require('path');

var controller=require(path.resolve('controllers/index.controller') );
require(path.resolve('redis/redis')).init(function () {

});
var cache=require(path.resolve('redis/cache') );

//sets a response time header
app.use(reseponseTime());

app.route('/api/friendList/:userId').get(cache.getFriendListFromCache,controller.getFriendList,cache.savefriendListIntoCache);

app.listen(3003,function () {
    console.log('listening');
})
