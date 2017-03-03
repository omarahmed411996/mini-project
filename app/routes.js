var express = require('express');
var router = express.Router();
//var pcontroller = require('./controllers/pcontroller');

router.get('/login', function(req,res){
res.render("Login.ejs");
});


//router.post('/project', pcontroller.createProjects);

module.exports = router;
