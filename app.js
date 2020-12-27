const express = require('express')

const app = express();
const router = express.Router() //router
const checkUrl = function(req,res,next) {
    console.warn("Current Route",req.originalUrl)
    next()
}


app.get('/',function(req,res) {
    res.sendFile(__dirname+"/home.html")
    
})

router.get('/login',checkUrl, (req,res) => {
    res.sendFile(__dirname+"/login.html")
    

})
app.get('/about',(req,res) => {
    res.sendFile( __dirname + "/about.html")
})
 
app.post('/login',(req,res) => {
    
    res.send("this is login post")
})
app.delete('/login',(req,res) => {
    res.send('login send')
})
app.put('/login',(req,res) => {
    res.send("login put")
})
app.use('/',router)
app.listen(5000)