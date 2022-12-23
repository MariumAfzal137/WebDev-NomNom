import express from "express";
import { getAllUser, signup , login, getProfile, getUserById, updateUser, deleteUser, getUserRecipes} from "../controllers/user-controller";
import {verifyAccessToken,verifyAdminAccessToken} from "../middleware/check-auth";
const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.get("/getProfile",verifyAccessToken || verifyAdminAccessToken, getProfile);
router.get("/getAllUsers",verifyAdminAccessToken,getAllUser);
router.get("/getUser/:id", getUserById);
router.get("/getUserRecipes", getUserRecipes);
router.post("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;