import React, { useEffect, useState } from 'react'
import Header from '../adminheader'
import axios from 'axios'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiAddBoxLine } from 'react-icons/ri'

import { confirmAlert } from 'react-confirm-alert';







const Ingredients = () => {

    let[ingredient,setIngredient] = useState([])

    async function getAllIngredients() {
      try {
        const response = await fetch('http://localhost:5000/ingredient/getAllIngredients');
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = await response.json();
        setIngredient(result.ingredients)
      } catch (err) {
        console.log(err);
      }
    }
    const addIngredient = async (e) => {

        e.preventDefault();

        const newIngredient  = prompt("Please enter the ingredient name");
        console.log(newIngredient);

        const res = await fetch("http://localhost:5000/ingredient/addIngredient", {
          method: "POST",
          
          body: JSON.stringify({
              name: newIngredient 
            }),
          headers: {
            "content-Type" : "application/json"
          }
          
        })
        const data = await res.json();
       
        if(res.status == 400 || !data ){
          window.alert("Ingredient not added");

        }else{
          
          window.alert("Ingredient added successfully");
          getAllIngredients();

    
        }
        
    }





    const deleteIngredient = async (id, name) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: `Are you sure you want to delete ${name}?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await axios.delete(
                            `http://localhost:5000/ingredient/delete/${id}`,
    
                        ).then(response => {
    
                            window.alert("This product was deleted")
                            getAllIngredients();
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
    useEffect(()=>{
      getAllIngredients();
    },[])

  return (
    <div className="main">
            <Header />
            <div className="recipeListContainer">
                <h2 id="recipeListHeading">Ingredients</h2>
                <button onClick={(e) => addIngredient(e)} style={{position: 'absolute',right: 20, fontSize: 20}}> Add Ingredient</button>
                <table className="recipeListTable">
                    <thead className="tableHead">
                        <tr>
                            <th>
                                Ingredient ID
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredient.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    
                                    <RiDeleteBin6Line onClick={(e) => deleteIngredient(val._id, val.name, e)}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Ingredients