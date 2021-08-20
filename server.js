var express = require("express")
var app = express()
app.use(express.urlencoded({extended:true}))  //use content form body directly
//app.use(express.static("public"))
app.use(express.json())
var server = app.listen(8089,function() {
    console.log("Hello from server")
})









