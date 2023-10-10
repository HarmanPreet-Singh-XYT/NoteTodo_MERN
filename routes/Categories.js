const express = require('express');
const { authenticateToken } = require('../data/Auth.js');
const {userData} = require('../data/Data.js');
const router = express.Router();
router.patch('/category/update',authenticateToken,(req,res)=>{
    const data = {Categories:{
        UserCategories:req.body,
    }}
    userData.findOneAndUpdate({User_id:req.headers.user_id},data)
    .exec()
    .then((Response)=>{
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Error',error:err})
    })
});
// router.post('/category/get',authenticateToken,(req,res)=>{
//     userCategory.find({User_id:req.body.User_id})
//     .exec()
//     .then((Response)=>{
//         res.status(200).json({message:'Success',userdata:Response})
//     })
//     .catch((err)=>{
//         console.log(err)
//         res.status(500).json({message:'Error',error:err})
//     })
// });
module.exports=router;