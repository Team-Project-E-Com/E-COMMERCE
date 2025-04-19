import express from "express"
import cors from "cors"
import ConnectionDB from "./config/mongodb.js";
import "dotenv/config"; 
import './config/cloudinary.js'
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoutes.js";


// App config
const app = express();
ConnectionDB();



// middlewares
app.use(express.json())
app.use(cors("*"));




// api endpoints

app.use("/api/user",userRouter)
app.use("/api/product",productRouter)



app.get("/",(req,res)=>{
    res.send("API Working")
})
const port = process.env.PORT || 5001
app.listen(port,()=>console.log(`Server is Runing on ${port}`))
