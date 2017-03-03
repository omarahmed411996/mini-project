var express = require('express');
var router = express.Router();
var user = require('mongodb://lib/user');

mongoose.get('/' , function(req,res,next){
    res.render('index',{title:'Express'});

});

router.post('/login' , function(req, res){
    var username = req.body.username;
    var password = req.body.password;

user.findOne({username: username , password: password}, function(err,user){
    if (err){
        console.log(err);
        return res.status(500).send();
    
    }
    if (!user){
       console.log("incorrect");
       return res.status(404).send(); 
    }
    return res.status(200).send();
})
})
function isLoggedIn (req , res, next){
    if (!(req.session && req.session.user)){
        return res.send('not Logged In');

    }
    next();
}
router.post('/signup', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var newuser = new user();
    newuser.username = username;
    newuser.password = username;
    newuser.save(function(err , savedUser){

        if (err){
            console.log(err);
            return res.status (500).send();
        }
        return res.status(200).send();
    });

});
module.exports = router;










