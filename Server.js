
import express  from "express";
import mongoose from "mongoose";
import userrouter from "./routes/User-routes.js";
import cors from "cors";
import courseRouter from "./routes/Course-routes.js";
import dotenv from 'dotenv';
import path from 'path';



dotenv.config();
const App = express();
mongoose.connect(process.env.CONNECTION_URL)
 .then(()=>console.log("Connected to database"))
 .catch((err) => console.log(err))

App.use(cors());
App.use(express.json());
App.use("/api/user",userrouter);
App.use("/api/course",courseRouter)

// ------------deployment------------

const __dirname = path.resolve();
//Serve Static assets if in production
if(process.env.NODE_ENV === 'production')
{
    App.use(express.static('client/build'));

    App.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

// ------------deployment--------------

const PORT = process.env.PORT;
 App.listen(PORT||5000,()=>console.log(`server listening on port ${PORT}`));
   
  