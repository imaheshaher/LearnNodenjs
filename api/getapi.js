const express = require("express")
const mongoose = require("mongoose")
const User = require('../models/users')
const bodyparser = require("body-parser")
var jsonparaser = bodyparser.json()
const app = express()
mongoose.connect("mongodb+srv://root:toor@cluster0.xjqif.mongodb.net/Employee?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected")
    })
    .catch(console.warn("not connect"))

app.get('/users', function (req, res) {
    User.find().then((data) => {
        res.json(data)
    })
}) 
app.post('/user', jsonparaser, function (req, res) {
    const data = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    data.save().then((result) => {
        res.status(201).json(result)
    })
        .catch((err) => console.warn(err))

})

app.delete('/user/:id', function (req, res) {
    User.deleteOne({
        _id: req.params.id
    }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => console.warn(err))
})
app.put('/user/:id', jsonparaser,function (req, res) {
    User.updateOne(
        { _id: req.params.id },
        { $set: { name: req.body.name,address:req.body.address }}
    ).then((result) => {
        res.status(201).json(result)
    })
        .catch((err) => {
            console.warn(err)
        })
})
app.listen(5000)