import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import Company from "../models/company.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
// import { sendVerificationEmail, sendWelcomeEmail, sendResetPasswordEmail , sendPasswordResetSuccessEmail} from "../mailtrap/pointOfContactEmails.js";

export const studentSignup = async (req, res) => {
    const { first_Name, last_Name, gender, date_of_birth, phone_number, email, password, confirm_password, state_of_residence } = req.body;
    try{
        if (password !== confirm_password) {
            return res.status(400).json({ message: "Password and Confirm Password must match" });
        }
        if (phone_number.length < 10 || phone_number.length > 15) {
            return res.status(400).json({ message: "Invalid phone number" });
        }
        if(!first_Name || !last_Name || !gender || !date_of_birth || !phone_number || !email || !password || !confirm_password || !state_of_residence){
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6){
            return res.status(400).json({ message: "password must be at least 6 characters" });
        }

        const user = await User.findOne({email})

        if (user) return res.status(400).json({message: "Email already exist" });

        const salt =  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            first_Name,
            last_Name,
            gender,
            date_of_birth,
            phone_number,
            email,
            password:hashedPassword,
            confirm_password:hashedPassword,
            state_of_residence,
        });

        if(newUser) {
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                first_Name: newUser.first_Name,
                last_Name: newUser.last_Name,
                gender: newUser.gender,
                date_of_birth: newUser.date_of_birth,
                phone_number: newUser.phone_number,
                email: newUser.email,
                password: newUser.password,
                confirm_password: newUser.confirm_password,
                state_of_residence: newUser.state_of_residence,
            });

        }else {
            res.status(400).json({ message: "Invalid user data"});
        }

    } catch (error) {
        console.log("Error in student login controller", error.message);
        res.status(500).json({ message: "Internal server error" });

    }
};

export const companySignup = async (req, res) => {
    console.log("Received signup request");

    const { companyName, companyPhoneNumber, companyEmail, password, confirmPassword, industryType, headquarterLocation, companySize, yearOfEstablishment, pointOfContactFirstName, pointOfContactLastName, pointOfContactDesignation, pointOfContactEmail, pointOfContactPhoneNumber, jobRoles, areasOfExpertiseSought, companyLogo, companyWebsite, linkedInProfile } = req.body;

    try {
        console.log("Request body:", req.body);
        if (!companyName || !companyPhoneNumber || !companyEmail || !password || !confirmPassword || !industryType || !headquarterLocation || !companySize || !yearOfEstablishment || !pointOfContactFirstName || !pointOfContactLastName || !pointOfContactDesignation || !pointOfContactEmail || !pointOfContactPhoneNumber || !jobRoles || !areasOfExpertiseSought || !companyWebsite || !linkedInProfile) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                msg: "Passwords do not match",
            });
        }

        const companyAlreadyExists = await Company.findOne({ companyEmail });
        if (companyAlreadyExists) {
            return res.status(400).json({ success: false, msg: "Company already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const parsedJobRoles = JSON.parse(jobRoles);
        const parsedExpertise = JSON.parse(areasOfExpertiseSought);
        const company = new Company({
            companyName,
            companyPhoneNumber,
            companyEmail,
            password: hashedPassword,
            confirmPassword,
            industryType,
            headquarterLocation,
            companySize,
            yearOfEstablishment,
            pointOfContactFirstName,
            pointOfContactLastName,
            pointOfContactDesignation,
            pointOfContactEmail,
            pointOfContactPhoneNumber,
            jobRoles: parsedJobRoles,
            areasOfExpertiseSought: parsedExpertise,
            companyLogo,
            companyWebsite,
            linkedInProfile,
            verificationToken,
            verificationTokenExpire: Date.now() + 24 * 60 * 60 * 1000,
        });

        await company.save();

        //jwt
        generateTokenAndSetCookie(res, company._id);

        res.status(201).json({
            success: true,
            msg: "Company created successfully",
            company: {
                ...company._doc,
                password: undefined,
                confirmPassword: undefined,
            },
        });
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};


// export const verifyCompanypointOfContactEmail = async (req, res) => {
//     const{code} = req.body;
//     try{
//         const company = await Company.findOne({verificationToken: code, verificationTokenExpire: {$gt: Date.now()}});
//         if(!company){
//             return res.status(400).json({success:false, msg: "Invalid or expired verification code"});
//         }
//         company.isVerified = true;
//         company.verificationToken = undefined;
//         company.verificationTokenExpire = undefined;
//         await company.save();

//         await sendWelcomeEmail(company.companypointOfContactEmail, company.companyName, company.pointOfContactEmail, company.pointOfContactFirstName);

//         res.status(200).json({success:true, msg: "pointOfContactEmail verified successfully",
//             company: {
//                 ...company._doc,
//                 password: undefined,
//             }
//         });

//     }catch(error){
//         console.log(("error in verifyingpointOfContactEmail",error));
//         res.status(400).json({success:false, msg: "Server error"});
//     }
// };

// export const companyLogin = async (req, res) => {
//     const {companypointOfContactEmail, password} = req.body;
//     try {
//         const company = await Company.findOne({companypointOfContactEmail}).select("+password");
//         if(!company){
//             return res.status(400).json({success:false, msg: "Invalid credentials"});
//         }
//         const isPasswordValid = await bcryptjs.compare(password, company.password);
//         if(!isPasswordValid){
//             return res.status(400).json({success:false, msg: "Invalid credentials"});
//         }

//         generateTokenAndSetCookie(res, company._id);

//         company.lastLogin = new Date();
//         await company.save();

//         res.status(200).json({
//             sucess:true,
//             msg: "Logged in successfully",
//             company: {
//                 ...company._doc,
//                 password: undefined,
//                 confirmPassword: undefined,
//             },
//         })

        


//     }catch(error){
//         console.log("Error in login", error);
//         res.status(400).json({success:false, msg: error.message});
//     }
    
// };

// export const logout = async (req, res) => {
//     res.clearCookie("token");
//     res.status(200).json({success:true, msg: "Logged out successfully"});  
// };

// export const forgotPassword = async (req, res) => {
//     const {companypointOfContactEmail} = req.body;
//     console.log("Received forgot password request for pointOfContactEmail:", companypointOfContactEmail); 
//     try{
//         const company = await Company.findOne({companypointOfContactEmail});
//         console.log("Company found:", company); 
        

//         if(!company){
//             return res.status(400).json({success:false, msg: "Company not found"});
//         }
//         //generate reset password token

//         const resetToken = crypto.randomBytes(20).toString("hex");
//         const restTokenExpire = Date.now() + 10 * 60 * 1000; //10 minutes

//         company.resetPasswordToken = resetToken;
//         company.resetPasswordExpire = restTokenExpire;

//         await company.save();

//         //send pointOfContactEmail
//         await sendResetPasswordEmail(company.companypointOfContactEmail, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
//         res.status(200).json({success:true, msg: "Reset password pointOfContactEmail sent successfully"});

//     }catch(error){
//         console.log("Error in forgot password", error);
//         res.status(400).json({success:false, msg: error.message});
//     }
// };

// export const resetPassword = async (req, res) => {
//     try {
//         const {token} = req.params;
//         const {password} = req.body;

//         const company = await Company.findOne({resetPasswordToken: token,
//             resetPasswordExpire: {$gt: Date.now()}
//         });

//         if(!company){
//             return res.status(400).json({success:false, msg: "Invalid or expired reset token"});
//         }

//         //update the password
//         const hashedPassword = await bcryptjs.hash(password, 10);
//         company.password = hashedPassword;
//         company.resetPasswordToken = undefined;
//         company.resetPasswordExpire = undefined;
//         await company.save();

//         await sendPasswordResetSuccessEmail(company.companypointOfContactEmail);

//         res.status(200).json({success:true, msg: "password reset successfully"});
//     }catch(error){
//         console.log("Error in reset password", error);
//         res.status(400).json({success:false, msg: error.message});
//     }
// };


// export const checkAuth = async (req, res) => {
//     try{
//         const company = await Company.findById(req.companyId).select("-password");
//         if(!company){
//             return res.status(400).json({success:false, msg: "Company not found"});
//         }

//         res.status(200).json({success: true, company});


//     }catch(error){
//         console.log("Error in checkAuth", error);
//         res.status(400).json({success:false, msg: error.message});
//     }
// };  