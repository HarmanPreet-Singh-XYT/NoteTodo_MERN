const express = require('express');
const router = express.Router();
const {userNotes, userTodo} = require('../data/Data.js');
const { authenticateToken } = require('../data/Auth.js');
router.post('/get/notes',authenticateToken,async (req,res)=>{
    userNotes.find({email:req.body.email})
    .then((resData)=>{
        if(resData!=null){
            res.status(200).json({message:"Found",
            data:resData
        })
        }
        else{
            res.status(200).json({message:"none"})
        }
    })
    .catch((err)=>{
        res.status(200).json({message:"Server Error"})
    })
});
router.post('/get/todos',authenticateToken,async (req,res)=>{
    userTodo.find({email:req.body.email})
    .then((resData)=>{
        if(resData!=null){
            console.log(resData)
            res.status(200).json({message:"Found",
            data:resData
        })
        }
        else{
            res.status(200).json({message:"none"})
        }
    })
    .catch((err)=>{
        res.status(200).json({message:"Server Error"})
    })
});
module.exports=router;