import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './admin.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom'
import { BiEdit, } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Header from '../adminheader'
// import UseAuth from '../../hooks/useAuth'

const RecipeList = () => {

    const [recipe, SetRecipe] = useState([])
    // const { auth } = UseAuth()
    const navigate = useNavigate()

    async function getAllRecipes() {
        axios.get(
            'http://localhost:5000/recipe/admin/getadminrecipes',
            // {
            //      headers: {
            //          'Authorization': `Bearer ${auth.accessToken}`
            //      }
            // }
        ).then(response => {
            SetRecipe(response.data)
        })
    }
    
    useEffect(()=>{
      getAllRecipes()
    },[])

    const handleUpdate = async (val) => {
        localStorage.setItem("recipe", JSON.stringify(val))
        navigate(`/admin/approverecipe/${val._id}`, { replace: true })
    }

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
        <div className="main">
            <Header />
            <div className="recipeListContainer">
                <h1 id="recipeListHeading">ALL RECIPES</h1>
                <table className="recipeListTable">
                    <thead className="tableHead">
                        <tr>
                            <th>
                                Recipe ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Cooking Time
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Approved
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipe.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.cookingtime}</td>
                                    <td>{val.description}</td>
                                    <td>{val.category}</td>
                                    <td>{val.approved}</td>
                                     <BiEdit onClick={(e) => handleUpdate(val)}/>
                                     <RiDeleteBin6Line onClick={(e) => deleteRecipe(val._id, val.name, e)}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecipeList