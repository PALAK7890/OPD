import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:string,unique:True},
    password:String,
    role:{
        type:String,
        enum : ["doctor","patient","admin"],
        required : true,
    }

})
export default mongoose.model('User',userSchema)