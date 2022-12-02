import './App.css';
import React from 'react';
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

import { useSelector } from 'react-redux';


function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      { <Routes>

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
 

        </Routes>}
    </main>


    </React.Fragment> 
  // return <MyRecipe/>
}
export default App;