const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: 'This field is required.'
      },
      approved: {
        type: Boolean,
<<<<<<< Updated upstream
        required: 'This field is required.'
=======
        default: false,
        required: true
>>>>>>> Stashed changes
      },
      cookingtime: {
        type: String,
        required: 'This field is required.'
      },
      ingredients: [
        {
          ingredient: String,
           qty: String
        }
      ],
      description: {
        type: String,
        required: 'This field is required.'
      },
      image:{
        type: String,
        default: ''
      },
      category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian','Dessert','Pakistan', 'Italian'],
        required: 'This field is required.'
      },
     
    });

module.exports = mongoose.model('recipe', recipeSchema)
