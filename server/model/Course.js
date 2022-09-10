import mongoose from "mongoose";

const Schema  = mongoose.Schema;

const courseSchema  = new Schema({

    title:
    {
        type: String,
        required : true,
    }
    ,subject:
    {
        type:String,
        required:true,
    },
    startDate:
    {
        type:String,
        required:true,
    }
    ,
    startTime:
    {
        type:String,
        required:true,
    }
    ,
    endDate :
    {
        type:String,
        required:true,
    },
    endTime:
    {
        type:String,
        required:true,
    }
    ,
    capacity :
    {
       type : Number,
       required : true 
    },
    creator:
    {
        type:mongoose.Types.ObjectId,
        ref : "User",
        required :true,
    },
    users :[{type:mongoose.Types.ObjectId,ref:"User",required:true}]

})

export default mongoose.model("Course",courseSchema);