import express from "express";
import { studentSignup, companySignup, logout } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/student-signup",studentSignup);
router.post("/company-signup",companySignup);
router.post("/logout",logout );
export default router;
