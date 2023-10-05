const express = require('express');
const bodyParser = require('body-parser');
const login_route = require('./routes/Login-route');
const Note_create = require('./routes/Note-create');
const Note_delete = require('./routes/Note-delete');
const Note_edit = require('./routes/Note-edit');
const Register_route = require('./routes/Register-route');
const Todo_create = require('./routes/Todo-create');
const Todo_delete = require('./routes/Todo-delete');
const Todo_edit = require('./routes/Todo-edit');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    origin: 'http://127.0.0.1:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies and authentication headers (if needed)
};
const PORT = process.env.PORT;
const app = express();
require('dotenv').config();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions));
app.use('/notes',Note_create);
app.use('/notes',Note_delete);
app.use('/notes',Note_edit);
app.use('/todos',Todo_create);
app.use('/todos',Todo_delete);
app.use('/todos',Todo_edit);
app.use('/logindata',login_route);
app.use('/logindata',Register_route);

app.get('/notes/data',(req,res)=>{

})
app.get('/todo/data',(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log("Backend Working");
})