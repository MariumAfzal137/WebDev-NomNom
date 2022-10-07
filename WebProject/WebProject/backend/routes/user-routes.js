import express from "express";
import { getAllUser, signup , login, getProfile, getUserById, updateUser, deleteUser} from "../controllers/user-controller";
import {verifyAccessToken} from "../middleware/check-auth";
const router = express.Router();

router.get("/getAllUsers", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
router.get("/getProfile", verifyAccessToken, getProfile);
router.get("/getUser/:id", getUserById);
router.post("/updateUser/:id", updateUser);
router.get("/deleteUser/:id", deleteUser);

export default router;