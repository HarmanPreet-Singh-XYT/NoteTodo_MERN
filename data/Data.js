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
const schemaNotes = new mongoose.Schema({
    email: String,
    id: Number,
    date: String,
    tag: String,
    color: String,
    title: String,
    time: String,
    content: String,
    category: String,
    priority: Boolean,
    completed: Boolean,
    timeopt: Boolean,
    class: String,
});
const schemaTodo = new mongoose.Schema({
    email: String,
    id: Number,
    date: String,
    tag: String,
    color: String,
    title: String,
    time: String,
    content: String,
    category: String,
    priority: Boolean,
    completed: Boolean,
    timeopt: Boolean,
    class: String,
});
const userData = mongoose.model('LoginData', schemaDB);
const userNotes = mongoose.model('NotesData', schemaNotes);
const userTodo = mongoose.model('TodoData', schemaTodo);
module.exports= {userData,userNotes,userTodo};