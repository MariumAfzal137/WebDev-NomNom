import React, {useState, useEffect} from "react";
import Header from '../Header';
import {Link, useLocation} from 'react-router-dom';
import Category from "../Category/Categories";
import Card from "./myrecipeCard";
import axios from "axios";

import "../Profile.css";
  


export const MyRecipes = () =>{
    let[recipes, setRecipes]=useState([])
    let[userid, setuserid] = useState('')
    
    // useEffect(() => {
    //   setuserid(localStorage.getItems("user"))
    // }, [userid])
    const user =localStorage.getItem("id")

  //   const getAllRecipes = async(user) => {
     
  //     axios.get(
  //         `http://localhost:5000/recipe/user/getuserrecipes/${userid}`,
  //          {
  //           headers: {
  //             "Content-Type": "application/json",
  //             //"Authorization": `Bearer ${auth.accessToken}`
  //         }
  //         }
  //     ).then(response => {
  //         setRecipes(response.data)
  //     })
  // }
  
  // useEffect(()=>{
  //   getAllRecipes()
  // },[])
        async function getAllRecipes() {
          try {
            const response = await fetch( `http://localhost:5000/user/getUserRecipes/${user}`);
        
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
       <>
    <Header/>
    <div >
    <h1 className="myrecipe-heading">My Recipes</h1>
    <Link to="/PostRecipe" className="post-btn">POST</Link> 

          <div className="myrecipe-cards">
          <Card rItems={recipes} />
          </div>
    </div>
   </>
    )
}

export default MyRecipes