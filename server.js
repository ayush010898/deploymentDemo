var express = require("express")
var app = express()
app.use(express.urlencoded({extended:true}))  //use content form body directly
app.use(express.static("public"))
app.use(express.json())
var server = app.listen(8085,function() {
    console.log("Server started")
})

app.post("/",function(req,res) {           //to insert new data
    var data = req.body
    res.send(data)
    //res.redirect("/")
})
