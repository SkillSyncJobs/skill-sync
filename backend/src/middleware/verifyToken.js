import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    console.log("Received headers:", req.headers);
    console.log("Received cookies:", req.cookies);
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("Received token:", token);
    if(!token){
        return res.status(401).json({success:false, msg: "Unauthorized - no token provised"})
        }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        if(!decoded){
            return res.status(401).json({success:false, msg: "Unauthorized - token verification failed"})
        }
        req.companyId = decoded.companyid;
        console.log("Company ID being searched:", req.companyid); 
        next();
    }catch(error){
        console.log("Error in verifyToken", error);
        return res.status(500).json({success:false, msg: error.message});
    }
};