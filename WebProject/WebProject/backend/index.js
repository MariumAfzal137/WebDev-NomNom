import express from "express";
import mongoose from "mongoose";

<<<<<<< Updated upstream
import router from "./routes/user-routes";
=======
import categoryRouter from "./routes/category-routes.js";
import userRouter from "./routes/user-routes.js";

import recipeRouter from "./routes/recipe-routes.js";
>>>>>>> Stashed changes

const app = express();
app.use(express.json());
app.use("/api/user", router);



mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7ensi4f.mongodb.net/App?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000)).then(()=>console.log("Connected to db and listening to 5000")
    ).catch((err)=>console.log(err));





