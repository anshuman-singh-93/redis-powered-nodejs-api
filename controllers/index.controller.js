var friendList=[{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'},{id:4,name:'d'}];
exports.getFriendList=function (req,res,next) {
    // imitating api call which takes around 2 second
    setTimeout(function () {
        res.data=friendList;
        return next();

    },2000)
};
