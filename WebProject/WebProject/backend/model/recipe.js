import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      approved: {
        type: Boolean,
        required: true
      },
      ingredients:[
        {
          ingredientname: String,
           qty: String,
           unit: String,
        }
      ],
      
      cookingtime: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image:{
        type: String,
        default: ''
      },
      category: {
        type: String,
        ref:'category',
        required: true
      },
     
    });

  export default mongoose.model("Recipe", recipeSchema);