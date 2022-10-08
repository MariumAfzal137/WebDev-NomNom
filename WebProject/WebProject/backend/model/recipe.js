const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: 'This field is required.'
      },
      approved: {
        type: Boolean,
        required: 'This field is required.'
      },
      cookingtime: {
        type: String,
        required: 'This field is required.'
      },
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
