import React from "react"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Sdata from "./Sdata"
import Category from "../Category/Categories";
import Card from "./recipeCart";
const Recipe = () => {
  
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
  }

  console.log(recipes)
  useEffect(()=>{
    getAllRecipes()
  },[])

    
  return (
    
        
          <div>
          <Category/>
          <div className="cards">
          <Card rItems={recipes} />
          </div>
          </div>
        
      
  )
}

export default Recipe
