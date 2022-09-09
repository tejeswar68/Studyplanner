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
        type:Date,
        required:true,
    }
    ,
    endDate :
    {
        type:Date,
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