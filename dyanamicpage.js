const http = require("https")
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

let tweets =[]
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
app.get("/gettweet",(req,res) => {
    res.send(tweets)
})
app.get("/tweet",(req,resp) => {
    let data =''
http.get("https://type.fit/api/quotes",(res) => {
    

    res.on('data',(chunk) => {
        data +=chunk
    })
    res.on('end', () => {
        var d=JSON.parse(data)
        tweets=d
        num=Math.random()*(100-1+1)+1
        n=Math.floor(num)
        console.log(n)
        console.log(d[n]);
        resp.render("tweet",{data:d[n]})
      });
})
// let a=JSON.parse(data)
// console.warn(a)
//     resp.render("tweet")
})


app.listen(3000)


