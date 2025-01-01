import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

export const companySignup = (req, res) => {
    res.send("company_login route");
};
export const logout = (req, res) => {
    res.send("logout route");
 };