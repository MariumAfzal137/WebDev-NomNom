import express from "express";
import mongoose from "mongoose";

import userRouter from "./backend/routes/user-routes.js";
import categoryRouter from "./backend/routes/category-routes.js";
import recipeRouter from "./backend/routes/recipe-routes.js";

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/recipe", recipeRouter);




mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7ensi4f.mongodb.net/App?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000)).then(()=>console.log("Connected to db and listening to 5000")
    ).catch((err)=>console.log(err));





