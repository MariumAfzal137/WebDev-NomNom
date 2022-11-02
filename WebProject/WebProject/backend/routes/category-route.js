import express from "express";
import { getAllCategories, addCategory,deleteCategory } from "../controllers/category-controller.js";
import {verifyAdminAccessToken} from "../middleware/check-auth.js";
const router = express.Router();

router.get("/getAllCategories",verifyAdminAccessToken, getAllCategories);
router.post("/addCategory",verifyAdminAccessToken, addCategory);
router.delete("/:id",verifyAdminAccessToken, deleteCategory);

export default router;