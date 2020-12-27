const express = require("express")
const mongoose = require("mongoose")
const User = require('./users')
mongoose.connect("mongodb+srv://root:toor@cluster0.xjqif.mongodb.net/Employee?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.warn("Data connected .......")
})
.catch(
    console.warn("Not Conneted")
)

User.find({},function(err,users) {
    if(err) {
        console.warn(err)
    }
    console.warn(users)
})

const data = new User({
    _id:new mongoose.Types.ObjectId,
    name:'om',
    email:'om@gmail.com'
})
data.save().then( (result) => {
    console.warn(result)
})

.catch(err => console.warn(err))