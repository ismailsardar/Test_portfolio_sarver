/**
 * Date: 2/04/2023
 * Subject:  token middleware and Role verify
 * Auth: Ismile Satdar
**/

//require packed
const jwt =require("jsonwebtoken");
const User = require("../models/userModel");
//Token verify middleware
exports.isSigning = async (req,res,next) => {
    try {
        const decoded = jwt.verify(
            req.headers.token,
            process.env.JWT_KEY
        );
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json(error);
    }
}

//Role verify
exports.isAdmin = async (req,res,next) => {
    try {
        const user = await User.find({email:req.body.email});
        if (user[0]['role'] === 1) {
            next();
        } else {
            return res.status(401).json("Unauthorized");
        }
    } catch (error) {
        console.log(error);
    }
}