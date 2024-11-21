import jwt from "jsonwebtoken";

export const userAuth=async (req,res,next)=>{
const {token}=req.headers;
if(!token){
    return res.json({Success:false,message:"Not Authorized . Login Again"})
}

try {
    const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
    if(tokenDecode.id){
        req.body.userId=tokenDecode.id;
    }else{
        return res.json({Success:false,message:"Not Authorized. Login Again"})
    }
    next()
} catch (error) {
    res.json({Success:false,message:error.message})
}

}