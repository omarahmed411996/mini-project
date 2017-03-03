var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// LW Byda5al 7agat fel fields***
// var mongoose = require('mongoose');
   //var Schema = mangoose.Schema;
   //var StudentSchema = new Schema ({
//title: String,
//title :{
   // type : String,
   // required : true ,
   // unique : true,
//}
    
   // })
//module.exports = mangoose.model ('student', StudentSchema)



//LW ma7atesh 7aga fel date y7ot date enahra***
// var mongoose = require('mongoose');
  //  var Schema = mangoose.Schema;
  //  var BookSchema = new Schema ({
//title: String,
// published :{
    //type : Date
   //default : Date.now,
 
//}
//keywords : Array,
//published : Boolean,
//author :{
   // type : Schema.objectId,
    //ref:'User'
//}
    
    //})
//module.exports = mangoose.model ('book', BookSchema)






var app = express();

//app.get('/',function(req,res){
    //res.sendfile('login.ejs');
//});

app.use(require("./app/routes.js"));

app.listen('3000', function(){
console.log(" local host 3000");
});
app.get("/homepage",function(req,res){
    res.render("Homepage.ejs");

});
app.get("/",function(req,res){
    res.render("Homepage.ejs");
});

app.get("/login",function(req,res){
    res.render("Login.ejs");
});
app.get("/register",function(req,res){
    res.render("Register.ejs");



});
app.get("/ViewStudentPortfolio",function(req,res){
    res.render("ViewStudentPortfolio.ejs");

});
app.get("/profiles",function(req,res){
    res.render("profiles.ejs");



});
