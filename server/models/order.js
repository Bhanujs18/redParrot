const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    items:{
        type:Array,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    }    
})

module.exports = mongoose.model("Order" , orderSchema);