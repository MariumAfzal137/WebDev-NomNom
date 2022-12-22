import React from "react"
import { useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';
import Category from "../Category/Categories";
import Card from "./recipeCart";
import Header from "../Header";
const Recipe = (url) => {


  
  let[recipes,setRecipes]=useState([])


  async function getAllRecipes() {
    try {
      const response = await fetch('http://localhost:5000/recipe/allrecipes');
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setRecipes(result)
    } catch (err) {
      console.log(err);
    }
    console.log(recipes)
  }
  async function searchRecipe(url)  {
    try{
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
      setRecipes(result)
    } catch (err) {
      console.log(err);
    }
    console.log(recipes)
  };

  
  useEffect(()=>{
    if(url.url==""){
      getAllRecipes()
    }
    else if(url!=""){
      console.log(url.url)
      searchRecipe(url.url)
    }
    
  },[])

    
  return (
    
        
          <div>
          <Header/>
          <Category/>
          <div className="cards">
          <Card rItems={recipes} />
          </div>
          </div>
        
      
  )
}

export default Recipe
