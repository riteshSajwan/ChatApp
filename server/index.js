import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/db.js';
import Route from './routes/routes.js'

const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Route);

Connection();
app.listen(PORT,()=>{
    console.log("running File")
})