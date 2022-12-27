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
      
      
      cookingtime: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      photo:{
        type: String,
        default: ''
      },
      category: {
        type: String,
        ref:'category',
        required: true
      },
      // author: {type: Schema.Types.ObjectId, ref:'User'}
     
    });

  export default mongoose.model("Recipe", recipeSchema);