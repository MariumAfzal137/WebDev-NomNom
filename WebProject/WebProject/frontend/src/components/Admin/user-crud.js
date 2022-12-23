import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './admin.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate, Link } from 'react-router-dom'
import { BiEdit, } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Header from '../adminheader'
// import UseAuth from '../../hooks/useAuth'

const UserList = () => {

    const [users, SetUsers] = useState([])
    // const { auth } = UseAuth()
    const navigate = useNavigate()

    async function getAllUsers() {
        axios.get(
            'http://localhost:5000/user/getAllUsers',
            {
                 headers: {
                     'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                 }
            }
        ).then(response => {
            SetUsers(response.data.users)
        })
    }
    
    useEffect(()=>{
        console.log(localStorage.getItem("accessToken"))
        getAllUsers()
        console.log(users)
    },[])

    // const handleUpdate = async (val) => {
    //     localStorage.setItem("user", JSON.stringify(val))
    //     //navigate(`/admin/approverecipe/${val._id}`, { replace: true })
    // }

    const deleteUser = async (id, email) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: `Are you sure you want to delete ${email}?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await axios.delete(
                            `http://localhost:5000/user/deleteUser/${id}`,
                            
                        ).then(response => {
                            window.alert("This user was deleted")
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
                <h1 id="recipeListHeading">ALL USERS</h1>
                <table className="recipeListTable">
                    <thead className="tableHead">
                        <tr>
                            <th>
                                User ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                               User Recipes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.myrecipes.map((val1, key1) =>{
                                        return(
                                            <Link to={'/admin/approverecipe/'} state={{val1}}> 
                                            {val1._id} 
                                            </Link>
                                        )
                                    })}</td>
                                   
                                     <RiDeleteBin6Line onClick={(e) => deleteUser(val._id, val.email, e)}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList