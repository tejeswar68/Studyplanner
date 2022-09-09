import express from "express";
import {getAllUser ,signup ,login} from "../controllers/userController.js";

const userrouter = express.Router();

userrouter.get("/",getAllUser);
userrouter.post("/signup",signup);
userrouter.post("/login",login);

export default userrouter;