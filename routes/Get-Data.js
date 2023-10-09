const express = require('express');
const router = express.Router();
const {userNotes, userTodo} = require('../data/Data.js');
const { authenticateToken } = require('../data/Auth.js');
router.post('/get/notes',authenticateToken,async (req,res)=>{
    userNotes.find({User_id:req.body.User_id})
    .then((resData)=>{
        if(resData!=null){
            res.status(200).json({message:"Found",
            data:resData
        })
        }
        else{
            res.status(404).json({message:"none"})
        }
    })
    .catch((err)=>{
        res.status(500).json({message:"Server Error"})
    })
});
router.post('/get/todos',authenticateToken,async (req,res)=>{
    userTodo.find({User_id:req.body.User_id})
    .then((resData)=>{
        if(resData!=null){
            res.status(200).json({message:"Found",
            data:resData
        })
        }
        else{
            res.status(404).json({message:"none"})
        }
    })
    .catch((err)=>{
        res.status(500).json({message:"Server Error"})
    })
});
module.exports=router;