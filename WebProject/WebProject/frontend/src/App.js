import './App.css';
import React, { useEffect }  from 'react';
import { Route, Routes } from "react-router-dom";

import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Profile from './components/Profile';
import RecipeDetail from './components/RecipeDetail';
import Login from './components/user/Login'
import Signup from './components/user/Signup'
import Homepage from './components/Homepage/recipe';
import PostRecipe from './components/userRecipe/postrecipe'
import MyRecipe from './components/userRecipe/MyRecipes'
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";


function App() {

    const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

useEffect(() => {
    if (localStorage.getItem("email")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/myProfile" element={<Profile />} />
      <Route path="/recipedetail" element={<RecipeDetail />} />
      <Route path="/postrecipe" element={<PostRecipe />} />
      <Route path="/home" element={<Homepage url=""/>} />
      <Route path="/homesearch" element={<Homepage url="http://localhost:5000/recipe/searchrecipes?keyword=s"/>} />
      {/* <Route path="/homesearch" element={<Homepage url={Header.url}/>} /> */}
      <Route path="/myrecipes" element={<MyRecipe />} />
 


       {/* { <Routes>

    <Route path="/" element={<Layout />}> 
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="recipedetail" element={<RecipeDetail />} />
        <Route path="" element={<Homepage />} />



        <Route element = {<RequireAuth/>}>
            <Route path="myProfile" element={<Profile />} />
            <Route path="postrecipe" element={<PostRecipe />} />
            <Route path="myRecipes" element={<MyRecipe />} />
    </Route>
    </Route>     
    </Routes>} */}
    </main>


    </React.Fragment> 
    }

export default App;