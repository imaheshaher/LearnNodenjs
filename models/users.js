const mongoose  = require("mongoose")

let userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    address:String,
    about:String
})

module.exports=mongoose.model('users',userSchema)

