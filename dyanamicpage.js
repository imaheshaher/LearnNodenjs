const express = require("express")
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
const encoder = bodyParser.urlencoded()
app.set("view engine","ejs")
app.use("/assets",express.static('assets'))
app.get("/profile/:name",(req,res) => {
    console.warn(req.params)
    text="we are going with node"
    msg = "this is msg"
    list=[1,2,3,4,6]
    res.render('profile',{data:req.params})
})

app.get("/home",(req,res) => {
    res.send("<h2>Home</h2>")
})

app.get("/login",(req,res) => {
    console.warn("Data connected .......")
    
    res.render(  'login')
})
app.post('/login',encoder,(req,res) => {
    console.warn(req.body.email)
    res.send("You Are Login ")
})
app.listen(5000)