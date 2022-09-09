
import express  from "express";
import mongoose from "mongoose";
import userrouter from "./routes/User-routes.js";
import cors from "cors";
import courseRouter from "./routes/Course-routes.js";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const App = express();
// App.use(express.static(path.join(__dirname,"../client/build")))
// ---------------deployment--------------- 
// const __dirname1=path.resolve();


if (process.env.NODE_ENV==="production"){
    App.use(express.static(path.join("Server.js","../client/build")))
    App.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
      res.sendFile(path.join("Server.js", '../client/build/index.html'));
    });
    App.get('*',(request,response)=>{
      response.sendFile(path.resolve("Server.js",'build','index.html'))
    })
  }
  
  // ---------------deployment----------------








App.use(cors());
App.use(express.json());
App.use("/api/user",userrouter);
App.use("/api/course",courseRouter)




mongoose.connect(process.env.CONNECTION_URL)
    .then(() => App.listen(process.env.PORT))
    .then(() => console.log("Connected to database and server listening on port 5000"))
    .catch((err) => console.log(err))
