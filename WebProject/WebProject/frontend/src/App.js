import './App.css';
import React, { useState,useEffect }  from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AboutUs from './components/AboutUs';
import Header from './components/Header';
import AdminHeader from './components/adminheader'
import Profile from './components/Profile';
import RecipeDetail from './components/RecipeDetail';
import Login from './components/user/Login'
import Signup from './components/user/Signup'
import Homepage from './components/Homepage/recipe';
import PostRecipe from './components/userRecipe/postrecipe'
import MyRecipe from './components/userRecipe/MyRecipes'
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Main from './components/Admin/main'
import RecipeCrud from './components/Admin/recipe-crud'
import ApproveRecipe from './components/Admin/approverecipe';

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";


 function App() {
  
//   const [url, setUrl] = useState("");
//     const dispath = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   console.log(isLoggedIn);

// useEffect(() => {
//     if (localStorage.getItem("email")); {
//         dispath(authActions.login());
//     }

//   }, [dispath]);
//   return <React.Fragment>
//     <header>
//       <Header/>
//     </header>

//     <main>

//     <Routes>


          // {!isLoggedIn ? (
          //     <>
          //   <Route path="/login" element={<Login />} />

          //   </>
          // ) : (
          //   <>
          //   <Route path="/myProfile" element={<Profile />} />
          //   <Route path="/postrecipe" element={<PostRecipe />} />
          //   <Route path="/myRecipes" element={<MyRecipe />} />
          //   <Route path="/aboutUs" element={<AboutUs />} />
          //   <Route path="/recipedetail" element={<RecipeDetail />} />
          //   <Route path="/" element={<Homepage />} />
          //   <Route path="/home" element={<Homepage url=""/>} />
          //   <Route path="/homesearch" element={<Homepage url="http://localhost:5000/recipe/searchrecipes?keyword=s"/>} />
          //   </>
          // ) }
       




//         <Route element = {<RequireAuth/>}>
//             <Route path="myProfile" element={<Profile />} />
//             <Route path="postrecipe" element={<PostRecipe />} />
//             <Route path="myRecipes" element={<MyRecipe />} />
//     </Route>
//     </Route>
//     </Routes>} */}
//     </main>


//     </React.Fragment>
return <ApproveRecipe/>
     }
   

export default App;
