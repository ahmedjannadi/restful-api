var express = require("express")
var app = express()

var bodyparser = require("body-parser")
var cors = require("cors")

var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/api")

var User = require("./models/user.js")

User.create({username:"ahmedjannadi",password:"jannadi"})

User.find().then(function(users){console.log(users)})

app.use(bodyparser.json())
app.use(cors())

app.get("/",function(req,res){
	
	User.find().then(function(users){
		res.send(users)
	})
})


// listen on port 8000
app.listen(8000)
