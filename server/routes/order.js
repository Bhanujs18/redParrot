const express = require('express');
const router = express.Router();
const order = require('../controller/order')

router.post("/createOrder" , order.createOrder);
router.get("/orderDetails" , order.orderDetails);

module.exports = router;