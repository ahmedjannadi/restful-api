var express = require("express")
var app = express()

var bodyparser = require("body-parser")
var cors = require("cors")

var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/api")

var users = require("./routes/users")

app.use("/api", users)

app.use(bodyparser.json())
app.use(cors())


app.get("/",function(req,res){
	res.send("hello world")	
})


// listen on port 8000
app.listen(8000)
