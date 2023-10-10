require('dotenv').config();
const express = require('express');
const SMTP = require('../data/SMTP.js')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {userData} = require('../data/Data.js');
const { authenticateToken } = require('../data/Auth.js');
router.post('/login/logon',authenticateToken,async (req,res)=>{
    await userData.findOne({email:req.body.email})
    .then((userdata)=>{
        if(userdata!=null){
            bcrypt.compareSync(req.body.password, userdata.password) ?
            res.status(200).json({
                message:'Success',
                user_info:{
                    name:userdata.name,
                    bio:userdata.bio,
                    dob:userdata.dob,
                    email:userdata.email,
                    User_id:userdata.User_id,
                    categories:userdata.Categories['UserCategories'],
                    total:userdata.Total,
                }
            })
            :
            res.status(401).json({message:'incorrect'});
        }else{
            res.status(409).json({message:'Exist',error:err});
        }
    })
    .catch((err)=>{
        res.status(404).json({message:'failed',error:err});
    })
})
const date = new Date();
const today = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
router.post('/login/send_otp',authenticateToken,async (req,res)=>{
    await userData.findOne({email:req.body.email})
    .then((userdata)=>{
        if(userdata!=null){
            const OTP = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            const encrypted_otp = bcrypt.hashSync(OTP.toString(), saltRounds);
            SMTP.sendMail({
                from: process.env.SMTP_EMAIL,
                to: req.body.email,
                subject: 'Notes/Todo Verification OTP',
                html: `<div style=" max-width: 680px; margin: 0 auto; padding: 45px 30px 60px; background: #ffffff; background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner); background-repeat: no-repeat; background-size: 800px 452px; background-position: top center; font-size: 14px; color: #434343; " > <header> <table style="width: 100%;"> <tbody> <tr style="height: 0;"> <td> <img alt="" src="https://cdn3d.iconscout.com/3d/premium/thumb/schedule-time-6020499-4995379.png" height="60px" /> </td> <td style="text-align: right;"> <span style="font-size: 16px; line-height: 30px; color: #ffffff;" >${today}</span > </td> </tr> </tbody> </table> </header> <main> <div style="background-color: #fbe3fc; margin: 0; margin-top: 70px; padding: 92px 30px 115px; border-radius: 30px; text-align: center; " > <div style="width: 100%; max-width: 489px; margin: 0 auto;"> <h1 style=" margin: 0; font-size: 24px; font-weight: 500; color: #1f1f1f; " > Your OTP </h1> <p style=" margin: 0; margin-top: 17px; font-size: 16px; font-weight: 500; " > Hey ${userdata.name}, </p> <p style=" margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px; " > Thank you for choosing our Notes-Todo App. Use the following OTP to login with your email address. OTP is valid for <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>. Do not share this code with others. </p> <p style=" margin: 0; margin-top: 60px; font-size: 40px; font-weight: 600; letter-spacing: 25px; color: #ba3d4f; " > ${OTP} </p> </div> </div> <p style=" max-width: 400px; margin: 0 auto; margin-top: 90px; text-align: center; font-weight: 500; color: #8c8c8c; " > Need help? Ask at <a href="mailto:harmanpreetsingh@programmer.net" style="color: #499fb6; text-decoration: none;" >harmanpreetsingh@programmer.net</a > or visit our <a href="" target="_blank" style="color: #499fb6; text-decoration: none;" >Help Center</a > </p> </main> <footer style=" width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #e6ebf1; " > <p style=" margin: 0; margin-top: 40px; font-size: 16px; font-weight: 600; color: #434343; " > Notes-Todo App </p> <p style="margin: 0; margin-top: 8px; color: #434343;"> Github Project </p> <div style="margin: 0; margin-top: 16px;"> <a href="" target="_blank" style="display: inline-block;"> <img width="36px" alt="Facebook" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook" /> </a> <a href="" target="_blank" style="display: inline-block; margin-left: 8px;" > <img width="36px" alt="Instagram" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram" /></a> <a href="" target="_blank" style="display: inline-block; margin-left: 8px;" > <img width="36px" alt="Twitter" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter" /> </a> <a href="" target="_blank" style="display: inline-block; margin-left: 8px;" > <img width="36px" alt="Youtube" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube" /></a> </div> <p style="margin: 0; margin-top: 16px; color: #434343;"> Open-Source 2023 </p> </footer> </div>`
            }).then(()=>{
                res.status(200).json({message:'sent',secure_otp:encrypted_otp});
            })
        }else{
            res.status(404).json({message:'incorrect',error:err});
        }
    })
    .catch((err)=>{
        res.status(500).json({message:'failed',error:err});
    })
});
router.post('/login/verifyotp',authenticateToken,async (req,res)=>{
    await userData.findOne({email:req.body.email})
    .then((userdata)=>{
        if(userdata!=null){
            bcrypt.compareSync(req.body.user_otp, req.body.encrypted_otp) ?
            res.status(200).json({
                message:'Success',
                user_info:{
                    name:userdata.name,
                    bio:userdata.bio,
                    dob:userdata.dob,
                    email:userdata.email,
                    User_id:userdata.User_id,
                    categories:userdata.Categories['UserCategories'],
                    total:userdata.Total,
                }
            })
            :
            res.status(401).json({message:'incorrect'});
        }else{
            res.status(404).json({message:'incorrect',error:err});
        }
    })
    .catch((err)=>{
        res.status(500).json({message:'failed',error:err});
    })
})

module.exports=router;

