import React from "react"
import {Link} from 'react-router-dom';
import RecipeDetail from "../RecipeDetail";
const Card = ({rItems}) => { 
  const PF = 'http://localhost:5000/';

  console.log(PF)
    return (
    <>
      {rItems.map((rItems, index) => {
          if(rItems.approved==true)
          
        return (
          <Link to={'/recipedetail'} state={{rItems}} > 
          <div className="card">
            <img src={PF+rItems.image} alt="recipe pic" id="cardimage"></img>
            
            <div style={{marginLeft : 0.5 +'cm', postion:'absolute'}}>
              <div style={{fontSize:20+"px",color:'black', fontFamily:'Raleway', lineHeight: 0.5 +'cm'}}>{rItems.name}</div>
              <div style={{fontSize:15+"px",color:'grey', fontFamily:'Raleway'}}>{rItems.category}</div>
            </div>
            
          </div>
          </Link>
          
        )
      })}
    </>
  )
}

export default Card