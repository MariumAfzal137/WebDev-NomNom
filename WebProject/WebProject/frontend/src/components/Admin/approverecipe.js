import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../adminheader'
import { useLocation, useNavigate } from 'react-router-dom'

const ApproveRecipe= () => {

    const [recipe, setrecipe] = useState(JSON.parse(localStorage.getItem("recipe")))
    const [approve, setapprove] = useState(recipe.approve)
             

    const navigate = useNavigate()

    const DataChange = () => {
        setapprove(value => true);
      };
      

    const approveRecipe= (e) => {
        e.preventDefault()
       
                axios.put(
            `http://localhost:5000/approverecipe/${recipe._id}`,
            JSON.stringify({
                approve 
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": `Bearer ${auth.accessToken}`
                }
            }
        ).then(() => {
            window.alert("Updated")
            localStorage.removeItem("recipe")
            navigate(`/admin/recipe-crud`, { replace: true })
        }
        ).catch(err => {
            window.alert("Failed to update")
        })
    }
    
    const ing=recipe.ingredients
    return (

        <div className='approverecipe'>
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
        
              {recipe.description}
              </text>
      
          </div>
          <button className='approve-btn'
          
         value={approve}
         onChange={DataChange}
          onClick={approveRecipe}>APPROVE</button>
          
          </div>
        )
      }
      
export default ApproveRecipe
