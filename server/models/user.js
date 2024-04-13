const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    email: {
        type : String,
        require : true,
        unique: true
    },  
password : {
    type :String,
    require : true
},
    address: {
        type : String,
    },
    mobile : {
        type : String,
    },
    wallet : {
        type : String,
    },
    orders : {
        type : Array,
        },
})

module.exports = mongoose.model("User" , userSchema);