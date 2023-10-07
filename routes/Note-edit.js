const express = require('express');
const { authenticateToken } = require('../data/Auth.js');
const {userNotes} = require('../data/Data.js');
const router = express.Router();
router.patch('/note/edit',authenticateToken,(req,res)=>{
    userNotes.findOneAndUpdate({User_id:req.body.User_id,id:req.body.id},req.body)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
})
module.exports=router;