const express = require('express');
const { authenticateToken } = require('../data/Auth.js');
const {userData} = require('../data/Data.js');
const router = express.Router();
router.patch('/usertotal/update',authenticateToken,(req,res)=>{
    userData.findOneAndUpdate({User_id:req.headers.user_id},req.body)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
})
module.exports=router;