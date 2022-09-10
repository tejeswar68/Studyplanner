
import express  from "express";
import mongoose from "mongoose";
import userrouter from "./routes/User-routes.js";
import cors from "cors";
import courseRouter from "./routes/Course-routes.js";
import dotenv from 'dotenv';
import path from 'path';



dotenv.config();
const App = express();


App.use(cors());
App.use(express.json());
App.use("/api/user",userrouter);
App.use("/api/course",courseRouter)

//------------deployment------------

// const __dirname = path.resolve();
// if(process.env.NODE_ENV === 'production')
// {
//  App.use(express.static(path.join(__dirname,"../client/build")));
//  App.get('*',(req,res)=>
//  {
//     res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
//  })
// }
// else
// {
//    App.get("/",(req,res)=>
//    {
//     res.send("API is running...")
//    }) 
// }


//------------deployment--------------

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => App.listen(process.env.PORT||5000))
    .then(() => console.log("Connected to database and server listening on port 5000"))
    .catch((err) => console.log(err))
