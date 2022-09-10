import mongoose from "mongoose";
import Course from "../model/Course.js";
import User from "../model/User.js";

export const getAllCourse = async (req,res,next)=>
{
    let courses;
    try {
        courses = await Course.find();
    } catch (error) {
        return console.log(error);
    }
    if(!courses)
    {
        return res.status(400).json({message:"NO COURSES FOUND!"})
    }
    return res.status(200).json({courses});
}

export const createCourse = async (req,res,next)=>
{
    const {title,subject, startDate,endDate,capacity,creator} = req.body;

    let existingUser;

    try {
        existingUser = await User.findById(creator);
    } catch (error) {
        return console.log(error);
    }
    if(!existingUser)
    {
        return res.status(400).json({message :"Unable to Find User By this Id"});
    }
    const course = new Course({
        title,
        subject,
        startDate,
        endDate,
        capacity,
        creator,
        users:[],
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        course.users.push(creator);
        await course.save({session});
        existingUser.createdcourse.push(course._id);
        existingUser.joinedcourse.push(course._id);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (error) {
        return res.status(500).json({message:error});
    }
    return res.status(200).json({course});
}
export const joinCourse = async (req,res,next)=>
{
    const {userId} = req.body;
    const courseId = req.params.id;

    let existingCourse ,existingUser,enrolledUser;
    try {
        existingCourse = await Course.findById(courseId);
        existingUser = await User.findById(userId);
        // enrolledUser = await Course.findOne({users:userId});
        
      
    } catch (error) {
        return console.log(error);
    }

    if(existingCourse.users.length>=existingCourse.capacity)
    {
        return res.status(404).json({message:"STUDYSESSION CAPACITY IS FULL"})
    }
    else if(existingCourse.creator == userId)
    {
        return res.status(400).json({message:"CREATOR CANNONT ENROLL AGAIN!"})
    }
    // else if(enrolledUser)
    // {
    //     return res.status(400).json({message:"ALREADY ENROLLED TO THE COURSE!"})
    // }
  
    try
    {
        const session = await mongoose.startSession();
        session.startTransaction();
        existingCourse.users.push(userId);
        await existingCourse.save({session});
        existingUser.joinedcourse.push(courseId);
        await existingUser.save({session});
        await session.commitTransaction();
    }
    catch(err)
    {
        return res.status(500).json({message:err});
    }
    return res.status(200).json({message:"SUCCESFULLY ENROLLED INTO THE COURSE!"});
}