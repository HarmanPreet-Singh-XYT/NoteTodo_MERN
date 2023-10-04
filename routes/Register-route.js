require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {userData} = require('../data/Data.js');
const key=process.env.ENCRYPT_BACKEND;
router.post('/login/register',async (req,res)=>{
    const token = jwt.sign({ pass: req.body.pass }, key);
    const data = new userData({
        name:req.body.name,
        bio:req.body.bio,
        dob:req.body.dob,
        email:req.body.email,
        password:token,
    })
    await userData.exists({email:req.body.email})
    ? 
    res.status(200).json({message:'Exist'})
    : 
    data.save()
    .then(()=>{
        res.status(200).json({message:'Success'});
    })
    .catch((err)=>{
        res.status(500).json({message:'failed',error:err});
    })
})
module.exports=router;