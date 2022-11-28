
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
        <img id="recipe" src={recipe.image} alt="Avatar"></img>
        <ul>
        <text className="recipe-title" >{recipe.name}</text> <br></br>
        <text className="recipe-subtitle"><u>safahai</u> <br></br>
        Savoury <br></br>
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
            <ul>Hot sauce 1 tbs</ul> 
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
        <ul>Prepare Pickled Burger Sauce:</ul>
        <ul>In a bowl,add mayonnaise,hot sauce,mustard paste,tomato ketchup,Worcestershire sauce,pickled cucumber and onion,mix well & set aside.</ul>

        <ul>Prepare Smash Burger Patties:</ul>
        <ul>In a bowl,add beef mince,take small quantity (75g) and make a ball.</ul>

        <ul>Place all meat balls on a tray & refrigerate for 15 minutes (makes 8).</ul>

        <ul>Heat cast iron hot plate & grease with butter,toast burger buns & set aside.</ul>

        <ul>Grease cast iron hot plate with cooking oil,place meat balls and butter paper,press with flat weight to flatten the balls (smash it as thin as possible).</ul>
        </text>

    </div>
    
    
    </>
  )
}

export default RecipeDetail