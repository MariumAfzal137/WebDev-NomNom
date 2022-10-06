import express from "express";
import { getAllCategories, addCategory } from "../controllers/category-controller";
//import {verifyAccessToken} from "../middleware/check-auth";
const router = express.Router();

router.get("/getAllCategories", getAllCategories);
router.post("/addCategory", addCategory);

export default router;