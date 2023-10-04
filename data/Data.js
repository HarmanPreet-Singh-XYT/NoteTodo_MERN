const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGOOSE_URL;
mongoose
.connect(url,{dbName:"Notes-TODO"})
.then(c=>console.log("DataBase Status:Connected"))
.catch(err=>console.log(`Got An Error:${err}`));
const schemaDB = new mongoose.Schema({
    name: String,
    bio: String,
    dob: String,
    email: String,
    password: String,
});
const userData = mongoose.model('form-data', schemaDB);
module.exports= {userData};