require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {userData} = require('../data/Data.js');
const key=process.env.ENCRYPT_BACKEND;
router.post('/login/logon',async (req,res)=>{
    await userData.findOne({email:req.body.email})
    .then((userdata)=>{
        if(userdata!=null){
            const decoded = jwt.verify(userdata.password, key);
            decoded.pass===req.body.password ?
            res.status(200).json({
                message:'Success',
                user_info:{
                    name:userdata.name,
                    bio:userdata.bio,
                    dob:userdata.dob,
                    email:userdata.email,
                }
            })
            :
            res.status(200).json({message:'incorrect'});
        }
    })
    .catch((err)=>{
        res.status(200).json({message:'incorrect',error:err});
    })
})
module.exports=router;