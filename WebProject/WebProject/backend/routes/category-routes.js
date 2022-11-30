import express from "express";
import { getAllCategories, getCategoryName, addCategory,deleteCategory } from "../controllers/category-controller";
import {verifyAdminAccessToken} from "../middleware/check-auth";
const router = express.Router();

router.get("/getAllCategories",verifyAdminAccessToken, getAllCategories);
router.post("/addCategory",verifyAdminAccessToken, addCategory);
router.delete("/delete/:id",verifyAdminAccessToken, deleteCategory);
router.get("/getCategoryName/:id", getCategoryName);

export default router;