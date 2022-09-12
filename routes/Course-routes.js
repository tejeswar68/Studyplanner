import  express  from "express";
import {getAllCourse,createCourse,joinCourse,getCourseById} from "../controllers/courseController.js"

const courseRouter   = express.Router();

courseRouter.get("/",getAllCourse);
courseRouter.post("/create",createCourse);
courseRouter.put('/join/:id',joinCourse);
courseRouter.get('/:id',getCourseById)


export default courseRouter;