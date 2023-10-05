const nodemailer = require('nodemailer');
require('dotenv').config();
const server=process.env.SMTP_SERVER;
const port=process.env.SMTP_PORT;
const user=process.env.SMTP_USERNAME;
const pass=process.env.SMTP_PASSWORD;
const SMTP = nodemailer.createTransport({
    host: server,
    port: port,
    auth: {
        user: user,
        pass: pass
    }
});
module.exports=SMTP;