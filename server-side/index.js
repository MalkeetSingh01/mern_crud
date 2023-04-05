import express from "express";

import cors from "cors";

// import bodyParser from "body-parser";

const app=express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));// old version
app.use(express.json());
app.use(express.urlencoded({extended:true}))


import Connection from "./database/db.js";

import router from "./Routes/routes.js";

import dotenv from "dotenv";
const port=8000;

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
// console.log(username,password);
Connection(username,password);

app.use(cors());//always above routes

app.use('/',router);



app.listen(port,()=>{
    console.log(`-------${port}--------`)
});