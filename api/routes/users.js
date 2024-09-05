const express = require("express");
const router = express.Router();
const {updateUser,deleteUser,getUser,getUsers} = require("../controllers/user");
const {verifyToken,verifyUser,verifyAdmin} = require("../utils/verifyToken");


// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user you are logged in and you can delete")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello adm,n you are logged in and you can delete all acounts")
// })



router.put("/:id",verifyUser, updateUser)
router.delete("/:id",verifyUser, deleteUser)
router.get("/:id",verifyUser, getUser)
router.get("/",verifyAdmin, getUsers)


module.exports = router