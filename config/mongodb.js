import mongoose from "mongoose"

const ConnectionDB = () =>{
    try {
         mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("MongoDB Connected..."))
    } catch (error) {
        console.log(`Connection Error:${error}`)
    }
}


export default ConnectionDB;