const express= require("express");
const userController = require("../Controllers/Users");
const router= express.Router();

router.post("/register",userController.register);
router.post("/login",userController.login);
module.exports=router;