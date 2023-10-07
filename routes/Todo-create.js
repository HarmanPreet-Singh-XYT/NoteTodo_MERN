const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../data/Auth.js');
const {userTodo} = require('../data/Data.js');
router.post('/todo/create',(req,res)=>{
    const data = new userTodo({
        email: req.body.email,
        id: req.body.id,
        date: req.body.date,
        tag: req.body.tag,
        color: req.body.color,
        title: req.body.title,
        time: req.body.time,
        content: req.body.content,
        category: req.body.category,
        priority: req.body.priority,
        completed: req.body.completed,
        timeopt: req.body.timeopt,
        class: req.body.class,
        User_id:req.body.User_id,
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