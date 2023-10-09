require('dotenv').config();
const express = require('express');
const { authenticateToken } = require('../data/Auth.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {userData} = require('../data/Data.js');
const key=process.env.ENCRYPT_BACKEND;
router.post('/login/register',authenticateToken,async (req,res)=>{
    const currentDate = new Date();
    const clientIP = req.ip;
    const hash = bcrypt.hashSync(req.body.pass, saltRounds);
    const DefaultCategories = ['All','Projects','Business','Finance'];
    const data = new userData({
        name:req.body.name,
        bio:req.body.bio,
        dob:req.body.dob,
        email:req.body.email,
        password:hash,
        User_id:req.body.User_id,
        Total:{create:0,delete:0,edit:0},
        Categories:DefaultCategories,
        AccountCreation:`${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}:${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`,
        CreationIP:clientIP,
    })
    await userData.exists({email:req.body.email})
    ? 
    res.status(200).json({message:'Exist'})
    : 
    data.save()
    .then(()=>{
        res.status(200).json({message:'Success',userdata:{
            name:req.body.name,
			bio:req.body.bio,
			dob:req.body.dob,
			email:req.body.email,
			User_id:req.body.User_id,
            categories:DefaultCategories,
            total:{create:0,delete:0,edit:0},
        }});
    })
    .catch((err)=>{
        res.status(500).json({message:'failed',error:err});
    })
})
module.exports=router;