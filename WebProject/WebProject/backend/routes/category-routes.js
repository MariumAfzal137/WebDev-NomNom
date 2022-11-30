import express from "express";
import { getAllCategories, addCategory,deleteCategory, getCategoryById } from "../controllers/category-controller";
import {verifyAdminAccessToken} from "../middleware/check-auth";
const router = express.Router();

router.get("/getAllCategories", getAllCategories);
router.post("/addCategory",verifyAdminAccessToken, addCategory);
router.delete("/:id",verifyAdminAccessToken, deleteCategory);
router.get("/category/:id",getCategoryById);

export default router;