var moongoose = require ('mongoose');
var userSchema = new mongoose.Schema({
    username : {type : string , unique : true},
    password : {type:String}
});

var User = mongoose.model('myuser , userSchema');
module.exports = user ; 






