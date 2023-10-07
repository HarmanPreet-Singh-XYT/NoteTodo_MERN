const express = require('express');
const router = express.Router();
const {userNotes} = require('../data/Data.js');
const { authenticateToken } = require('../data/Auth.js');
router.delete('/note/delete/:User_id/:Note_id',authenticateToken,(req,res)=>{
    userNotes.find({User_id:req.params.User_id,id:req.params.Note_id})
})
module.exports=router;