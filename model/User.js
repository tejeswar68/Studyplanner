import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    
    email:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type:String,
        require : true,
        minLength:8
    },
    createdcourse : [{type:mongoose.Types.ObjectId,ref:"Course",required:true}],
    joinedcourse : [{type:mongoose.Types.ObjectId,ref:"Course",required:true}],

});

export default mongoose.model("User",userSchema);