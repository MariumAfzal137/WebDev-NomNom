import express from "express";
import { getAllUser, signup , login, getProfile} from "../controllers/user-controller";
import {verifyAccessToken} from "../middleware/check-auth";
const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
router.get("/getProfile", verifyAccessToken, getProfile);

export default router;