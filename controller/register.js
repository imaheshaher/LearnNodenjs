const express = require("express");
const app=express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jsonParaser = bodyParser.json()
const User = require("../models/users")
require("../models/localdb")
const router=express.Router()

router.use(function(req,res,next) {
    next()
})
app.get('/',function(req,res) {
    res.send("Welcome")
})

app.get('/users',(req,res) => {
    const data = User.find().then((result) => {
        res.json(result)
    })
})

app.post('/register',jsonParaser,function(req,res) {
    const data = new User({
        _id:mongoose.Types.ObjectId(),
        name:req.body.name,
        about:req.body.about
    })
    data.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.warn(err)
    })
})
const r=module.exports = router

app.listen(5000)