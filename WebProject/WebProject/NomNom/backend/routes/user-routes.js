import express from "express";
import { getAllUser, signup , login, getProfile} from "../controllers/user-controller";
import {verifyAccessToken,verifyAdminAccessToken} from "../middleware/check-auth";
const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.get("/getProfile",verifyAccessToken || verifyAdminAccessToken, getProfile);
router.get("/getAllUsers",verifyAdminAccessToken,getAllUser);

export default router;