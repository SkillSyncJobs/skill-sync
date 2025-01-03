import express from "express";
import { studentSignup, companySignup } from "../controllers/auth.controller.js";
const router = express.Router();
import multer from "multer";
import cloudinary from "cloudinary";

import dotenv from "dotenv";
dotenv.config();



router.post("/student-signup",studentSignup);
router.post("/company-signup",companySignup);

const storage = multer.memoryStorage(); // Use memory storage for direct upload to Cloudinary
const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        res.json({ url: result.secure_url }); // Send back the URL of the uploaded image
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        res.status(500).json({ message: "Image upload failed" });
    }
});


router.post("/company-signup", companySignup);





export default router;
