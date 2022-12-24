import React, {useState, useEffect} from "react";
import Header from '../Header';
import {Link, useLocation} from 'react-router-dom';
import Category from "../Category/Categories";
import Card from "./myrecipeCard";
import axios from "axios";

import "../Profile.css";
  


export const MyRecipes = (url) =>{
    let[recipes, setRecipes]=useState([])
    let[userid, setuserid] = useState('')
    
    // useEffect(() => {
    //   setuserid(localStorage.getItems("user"))
    // }, [userid])
    const user =localStorage.getItem("user")
    const myemail = user.email

  
        
            async function getAllRecipes() {
              try{
                    const response = await fetch("http://localhost:5000/user/getUserRecipes",{
                      
                      
                                    method: "GET",
                                    headers:{
                                        "Content-Type" : "application/json"
                                    },
                                    body: JSON.stringify({
                                      email: myemail
            }),
          });
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
                  setRecipes(result)
                } 
               catch (err) {
                  console.log(err);
                }
                console.log(recipes)
              };
              useEffect(()=>{
                getAllRecipes()
              },[])
                // useEffect(()=>{
                //   if(url.url=="/myrecipes"){
                //     getAllRecipes()
                //   }
                //   else if(url!=""){
                //     console.log(url.url)
                //   }
                  
                // },[])
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