const express = require('express');
const router = express.Router();
const user = require("../controller/user")

router.post("/signup" , user.signup)
router.get("/login" , user.login)

module.exports = router;