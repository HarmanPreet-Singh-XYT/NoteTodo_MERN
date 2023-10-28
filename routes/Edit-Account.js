const express = require('express');
const { authenticateToken } = require('../data/Auth.js');
const {userData} = require('../data/Data.js');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 1;
router.patch('/account/edit',authenticateToken,(req,res)=>{
    const data = {
        name:req.body.name,
        bio:req.body.bio,
        dob:req.body.dob,
    }
    userData.findOneAndUpdate({User_id:req.headers.user_id},data)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
});
router.patch('/account/reset',authenticateToken,(req,res)=>{
    const data = {
        Total:{
            create:0,
            delete:0,
            edit:0,
        }
    }
    userData.findOneAndUpdate({User_id:req.headers.user_id},data)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
});
router.patch('/account/password',authenticateToken,(req,res)=>{
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const data = {
        password:hash,
    }
    userData.findOneAndUpdate({User_id:req.headers.user_id},data)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
});
module.exports=router;