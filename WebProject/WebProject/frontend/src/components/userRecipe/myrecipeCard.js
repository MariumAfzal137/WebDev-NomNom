import React from "react"
import {Link} from 'react-router-dom';
import RecipeDetail from "../RecipeDetail";
import { RiDeleteBin6Line } from 'react-icons/ri'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Card = ({rItems}) => { 
  const PF = 'http://localhost:5000/';
  console.log(PF)
  const deleteRecipe = async (id, name) => {
    confirmAlert({
        title: 'Confirm Deletion',
        message: `Are you sure you want to delete ${name}?`,
        buttons: [
            {
                label: 'Yes',
                onClick: async () => {
                    await axios.delete(
                        `http://localhost:5000/recipe/delete/${id}`,
                        // {
                        //     headers: {
                        //         'Authorization': `Bearer ${auth.accessToken}`
                        //     }
                        // }
                    ).then(response => {
                        //SetProducts(response.data)
                        window.alert("This product was deleted")
                    }).catch(err => {
                        window.alert('Failed to delete')
                    })
                }
            },
            {
                label: 'No',
            }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        willUnmount: () => { },
        afterClose: () => { },
        onClickOutside: () => { },
        onKeypress: () => { },
        onKeypressEscape: () => { },
        overlayClassName: "overlay-custom-class-name"
    })
}
    return (
    <>
      {rItems.map((rItems, index) => {
          if(rItems.approved==true)
          
        return (
          <Link to={'/recipedetail'} state={{rItems}}> 
          <div className="card">
            <img src={PF+rItems.image} alt="recipe pic" id="cardimage"></img>
            
            <div style={{marginLeft : 0.5 +'cm', postion:'absolute'}}>
              <div style={{fontSize:20+"px",color:'black', fontFamily:'Raleway', lineHeight: 0.5 +'cm'}}>{rItems.name}
              <RiDeleteBin6Line onClick={(e) => deleteRecipe(rItems._id, rItems.name, e)}/></div>
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
