const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.post('/login/logon',(req,res)=>{
    console.log(req.body,"Backend is Responding")
    res.status(200).json({ message: "Request processed successfully" });
})
module.exports=router;