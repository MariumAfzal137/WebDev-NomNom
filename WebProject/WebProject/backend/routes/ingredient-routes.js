import express from "express";
import { getAllIngredients, getIngredientName, addIngredient,deleteIngredient } from "../controllers/ingredient-controller";
import {verifyAdminAccessToken} from "../middleware/check-auth";
const router = express.Router();

router.get("/getAllIngredients", getAllIngredients);

router.post("/addIngredient", addIngredient);
router.delete("/delete/:id", deleteIngredient);
router.get("/getIngredientName/:id", getIngredientName);

export default router;