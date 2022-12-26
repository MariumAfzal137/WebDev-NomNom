import React, { useEffect, useState } from 'react'
import Header from '../adminheader'
import axios from 'axios'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiAddBoxLine } from 'react-icons/ri'

import { confirmAlert } from 'react-confirm-alert';







const Categories = () => {

    let[category,setCategory] = useState([])

    async function getAllCategories() {
      try {
        const response = await fetch('http://localhost:5000/category/getAllCategories');
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = await response.json();
        setCategory(result.categories)
      } catch (err) {
        console.log(err);
      }
    }
    const addCategory = async (e) => {

        e.preventDefault();

        const newCategory  = prompt("Please enter the new category");
        console.log(newCategory);

        const res = await fetch("http://localhost:5000/category/addCategory", {
          method: "POST",
          
          body: JSON.stringify({
              name: newCategory
            }),
          headers: {
            "content-Type" : "application/json",
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
           
          }
          
        })
        const data = await res.json();
       
        if(res.status == 400 || !data ){
          window.alert("Category not added");

        }else{
          
          window.alert("Category added successfully");
          getAllCategories();

    
        }
        
    }





    const deleteCategory = async (id, name) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: `Are you sure you want to delete ${name}?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await axios.delete(
                            `http://localhost:5000/category/delete/${id}`,
                            {
                                headers: {
                                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                                }
                           }
                        ).then(response => {
    
                            window.alert("This category was deleted")
                            getAllCategories();
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
        getAllCategories();
    },[])

  return (
    <div className="main">
            <Header />
            <div className="recipeListContainer">
                <h2 id="recipeListHeading">Categories</h2>
                <button onClick={(e) => addCategory(e)} style={{position: 'absolute',right: 20, fontSize: 20}}> Add Category</button>
                <table className="recipeListTable">
                    <thead className="tableHead">
                        <tr>
                            <th>
                                Category ID
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    <RiDeleteBin6Line onClick={(e) => deleteCategory(val._id, val.name, e)}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Categories