import  express  from "express";
import {getAllCourse,createCourse,joinCourse} from "../controllers/courseController.js"

const courseRouter   = express.Router();

courseRouter.get("/",getAllCourse);
courseRouter.post("/create",createCourse);
courseRouter.put('/join/:id',joinCourse);


export default courseRouter;