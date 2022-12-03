import './App.css';
import React, { useEffect }  from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
import ProtectedRoute from './components/ProtectedRoute';

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";


function App() {

    const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

useEffect(() => {
    if (localStorage.getItem("email")); {
        dispath(authActions.login());
    }

  }, [dispath]);
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>

    <Routes>
          
    
          {!isLoggedIn ? (
              <>
            <Route path="/login" element={<Login />} />
            
            </>
          ) : (
            <>
            <Route path="/myProfile" element={<Profile />} />
            <Route path="/postrecipe" element={<PostRecipe />} />
            <Route path="/myRecipes" element={<MyRecipe />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/recipedetail" element={<RecipeDetail />} />
            <Route path="/" element={<Homepage />} />
            </>
          ) }
        </Routes>


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