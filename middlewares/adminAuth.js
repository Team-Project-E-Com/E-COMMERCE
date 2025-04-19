import jwt from 'jsonwebtoken'


const adminAuth = async (req,res,next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1]; 

        // console.log("Received token:", token);
        
        if(!token){
           return res.json({success:false,message:"Not Authorized Login Again"})
        }

        const verifyToken =  jwt.verify(token,process.env.JWT_SECRET)

        if(verifyToken !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized Login Again"})  
        }
        next();

    } catch (error) {
        console.log("Token error:", error.message);
        res.json({success:false,message:error.message})  
        
     }
}


export default adminAuth
