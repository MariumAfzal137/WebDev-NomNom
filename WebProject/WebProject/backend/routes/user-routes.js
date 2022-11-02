import express from "express";
<<<<<<< Updated upstream
import { getAllUser, signup , login, getProfile} from "../controllers/user-controller";
import {verifyAccessToken} from "../middleware/check-auth";
=======
import { getAllUser, signup , login, getProfile} from "../controllers/user-controller.js";
import {verifyAccessToken,verifyAdminAccessToken} from "../middleware/check-auth.js";
>>>>>>> Stashed changes
const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
router.get("/getProfile", verifyAccessToken, getProfile);

export default router;