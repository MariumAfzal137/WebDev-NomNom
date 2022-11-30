import React from "react"
import {Link} from 'react-router-dom';
import RecipeDetail from "../RecipeDetail";
const Card = ({rItems}) => { 

    return (
    <>
      {rItems.map((rItems, index) => {
          
        return (
          <Link to={'/recipedetail'+rItems}>
          <div className="card">
            <img src={rItems.image} alt="recipe pic" id="cardimage"></img>
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
