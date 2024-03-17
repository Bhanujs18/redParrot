const Order = require("../models/order");

const createOrder = async (req , res) =>{
try{
  const {items , price , status} = req.body;

  const order = new Order({
items,
price,
status
  })

  await order.save().then(()=>res.json({message:"orderPlaced"})).catch(()=>res.json({message : "Order NOt Placed"}))

}
catch(err){
    return res.status(500).json({
        message : err
    })
}
}

const orderDetails = async (req , res) =>{
    try{
   const order = await Order.find({}) 
  if(order){
   return  res.status(200).send(order);
  }
 res.status(400).json({message:"No Orders"})
}
    
    catch(err){
        return res.status(500).json({
            message : err
        })
    }
    }

module.exports = {createOrder , orderDetails}