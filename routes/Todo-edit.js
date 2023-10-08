const express = require('express');
const router = express.Router();
const {userTodo} = require('../data/Data.js');
const { authenticateToken } = require('../data/Auth.js');
router.patch('/todo/edit',authenticateToken,(req,res)=>{
    userTodo.findOneAndUpdate({User_id:req.body.User_id,id:req.body.id},req.body)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
})
module.exports=router;