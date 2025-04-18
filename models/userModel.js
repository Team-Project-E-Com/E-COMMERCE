import {Schema,model} from "mongoose"
import _default from "validator";

const userSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{}
    }

},{minimize:false})



const userModel = model ("user",userSchema);

export default userModel