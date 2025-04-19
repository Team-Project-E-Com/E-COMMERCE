import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"


// create a token 
const createToken = (id) => {
   return  jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1h"})
}


// login

const loginUser = async (req,res) => {
try {
    const {email,password} = req.body;

    const user = await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"User doesn't Exists"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch){
        const token = createToken(user._id);
        res.json({success:true,token})
    }
    else{
        return res.json({success:false,message:"Invalid Credentials"})  
    }
} catch (error) {
    res.json({success:false,message:error.message})  
    console.log(error);
}
}



// register

const registerUser = async (req,res) => {

    try {
        const {name,email,password} = req.body

    // check the Existing User or not
    const exists = await userModel.findOne({email});
    if(exists){
        return res.json({success:true,message:"User already Exists"})
    }
    
    // validate the mail and strong password
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter a Valid E-mail"})
    }
    
    if(password.length<8){
        return res.json({success:false,message:"Please enter a strong Password"}) 
    }

    // hasspassword

    const hashpassword = await bcrypt.hash(password,10)

    const newUser = new userModel({
        name,
        email,
        password:hashpassword
    })

    const user = await newUser.save();

    const token = createToken (user._id)
    console.log(token);
    
    res.json({success:true,token})

    } catch (error) {
      res.json({success:false,message:error.message})  
      console.log(error);
      
    }
}

// admin

const adminLogin = async (req,res) => {

try {
    const {email,password} = req.body

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
       const token = jwt.sign(email+password,process.env.JWT_SECRET)
       res.json({success:true,token})
    }
    else{
       res.json({success:false,message:"Invalid Credentials"})  
      
    }
} catch (error) {
    res.json({success:false,message:error.message})  
    console.log(error)
}

}

export {loginUser,registerUser,adminLogin}