import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user-routes.js";
import categoryRouter from "./routes/category-routes.js";
import recipeRouter from "./routes/recipe-routes.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/recipe", recipeRouter);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7ensi4f.mongodb.net/App?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000)).then(()=>console.log("Connected to db and listening to 5000")
    ).catch((err)=>console.log(err));





