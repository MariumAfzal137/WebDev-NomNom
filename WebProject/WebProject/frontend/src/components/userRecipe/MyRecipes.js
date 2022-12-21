import React, {useState, useEffect} from "react";
import Header from '../Header';
import {Link} from 'react-router-dom';
import Category from "../Category/Categories";
import Card from "./myrecipeCard";

import "../Profile.css";
  


export const MyRecipes = () =>{
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
    
    useEffect(() => {
      setmyemail(localStorage.getItems("email"))
    }, [myemail])

    // async function getAllRecipes() {
    //       const response = await fetch("http://localhost:5000/user/getUserRecipes",{
            
            
    //                       method: "GET",
    //                       headers:{
    //                           "Content-Type" : "application/json"
    //                       },
    //                       body: JSON.stringify({
    //                         myemail

    //                       }),
                      
    //               });
    //       if (!response.ok) {
    //         throw new Error(`Error! status: ${response.status}`);
    //       }
      
    //       const result = await response.json();
    //       setRecipes(result)
    //     } 
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
    return(
       
    
    <div >
    <h1 className="myrecipe-heading">My Recipes</h1>
    <Link to="/PostRecipe" className="post-btn">POST</Link> 

          <div className="myrecipe-cards">
          <Card rItems={recipes} />
          </div>
    </div>
   
    )
}

export default MyRecipes