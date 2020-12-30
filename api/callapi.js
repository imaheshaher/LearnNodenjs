const http = require("https")
const express = require("express")

const app = express()

app.set("view engine",'ejs')
let tweets=[]
app.get("/tweet",(req,res) => {
    n=Math.floor(Math.random() * (100 -1 +1) +1)
    console.log(n)
    res.render("tweet",{data:tweets[n]})
}).listen(1234)
http.get("https://type.fit/api/quotes",(res) => {
    let data =''

    res.on('data',(chunk) => {
        data +=chunk
    })
    res.on('end', () => {
        tweets=JSON.parse(data)
        //console.log(JSON.parse(data));
      });
})


