
import React from 'react'
import Header from './Header';
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeDetail = () => {

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {

    fetchDetails()

  },[])


  const fetchDetails = async () => {
  const res = await fetch('http://localhost:5000/recipe/recipedetails/63430bf717388d8f1fbdf0bb')
    .catch((err) => console.log(err));

  setRecipe(await res.json());

};


  return (
  <>
    <div id="recipe" >        
        <img id="recipe" src = {recipe.image} alt={recipe.image}></img>
        <ul>
        <text className="recipe-title" >{recipe.name}</text> <br></br>
        <text className="recipe-subtitle"><u>{recipe.category}</u> <br></br>
        {recipe.cookingtime} <br></br>
        
        </text>

        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <br></br>
        <text className="recipe-subtitle2">Ingredients</text> <br></br>
        <text className="recipe-subtitle">
            <br></br>

            <ul>{recipe.ingredients[0].qty} {recipe.ingredients[0].unit}  {recipe.ingredients[0].name}</ul> 
            <ul>Mustard paste 1 tbs </ul>
            <ul>Tomato ketchup 3 tbs </ul>
            <ul>Worcestershire sauce 1 tsp </ul>
            <ul>Pickled cucumber finely chopped 1-2 tbs </ul>
            <ul>Pyaz (Onion) finely chopped 2-3 tbs </ul>
            <ul>Beef qeema (Mince) 650g (with 20% fat) </ul>
            <ul>Makhan (Butter) </ul>
            <ul>Burger buns </ul><br></br>
        </text>

        <hr></hr>
        <br></br>
        <text className="recipe-subtitle2">Directions</text> <br></br>
        <text className="recipe-subtitle">
        <br></br>
        {recipe.description}
        </text>

    </div>
    
    
    </>
  )
}

export default RecipeDetail