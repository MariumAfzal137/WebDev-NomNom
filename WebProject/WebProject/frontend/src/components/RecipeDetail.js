import React from 'react'
import Header from './Header';
import "./Profile.css";
import { useLocation } from 'react-router-dom';


const RecipeDetail = (props) => {
  const location = useLocation()
  const recipe=location.state.rItems
  const ing=recipe.ingredients


  return (

  <>
   <Header/>
    <div id="recipe" >        
        <img id="recipe" src={recipe.image} alt="Avatar"></img>
        <ul>
        <text className="recipe-title" >{recipe.name}</text> <br></br>
        <text className="recipe-subtitle"><u>safahai</u> <br></br>
        {recipe.category} <br></br>
        {recipe.cookingtime}<br></br>
        
        </text>

        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        

        <hr></hr>
        
        <text className="recipe-subtitle2">Ingredients</text> <br></br>
        <br></br>
            {ing.map((ing, index) => {
          
        return (
          <text className="recipe-subtitle">
              {ing.item+" "}{ing.qty+" "}{ing.unit} <br></br>
          </text>
          
        )
      })}
          
            
            
        
          <br></br>
        <hr></hr>
        <br></br>
        <text className="recipe-subtitle2">Directions</text> <br></br>
        <text className="recipe-subtitle">
        <br></br>
        {/* <ul>Prepare Pickled Burger Sauce:</ul>
        <ul>In a bowl,add mayonnaise,hot sauce,mustard paste,tomato ketchup,Worcestershire sauce,pickled cucumber and onion,mix well & set aside.</ul>
        <ul>Prepare Smash Burger Patties:</ul>
        <ul>In a bowl,add beef mince,take small quantity (75g) and make a ball.</ul>
        <ul>Place all meat balls on a tray & refrigerate for 15 minutes (makes 8).</ul>
        <ul>Heat cast iron hot plate & grease with butter,toast burger buns & set aside.</ul>
        <ul>Grease cast iron hot plate with cooking oil,place meat balls and butter paper,press with flat weight to flatten the balls (smash it as thin as possible).</ul> */}
        {recipe.description}
        </text>

    </div>
    
    
    </>
  )
}

export default RecipeDetail