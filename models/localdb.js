const mongoose = require("mongoose")
const dataconnection = mongoose.connect("mongodb://localhost:27017/Employee",
{
    useNewUrlParser:true
},
(err) => {
    if(!err){
        console.warn("connected")
    }
    else {
        console.warn(err)
    }
}
)

module.exports=dataconnection