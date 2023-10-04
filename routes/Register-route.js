const express = require('express');
const router = express.Router();
const {userData} = require('../data/Data.js');
router.post('/login/register',(req,res)=>{
    const data = new userData({
        name:req.body.name,
        bio:req.body.bio,
        dob:req.body.dob,
        email:req.body.email,
        password:req.body.pass
    })
    data.save()
    .then(()=>{
        res.status(200).json({message:'Success'});
    })
    .catch((err)=>{
        console.log('Failed: ',err);
        res.status(500).json({message:'failed'});
    })
})
module.exports=router;