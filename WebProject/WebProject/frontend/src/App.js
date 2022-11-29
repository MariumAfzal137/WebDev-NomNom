import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Profile from './components/Profile';
import RecipeDetail from './components/RecipeDetail';
import Login from './components/user/Login'
import Signup from './components/user/Signup'
import PostRecipe from './components/userRecipe/PostRecipe'

import { useSelector } from 'react-redux';

function App() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // console.log(isLoggedIn);
  // return <React.Fragment>
  //   <header>
  //     <Header/>
  //   </header>

  //   <main>
      {/* <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/myProfile" element={<Profile />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
 

        </Routes>
    </main>


    </React.Fragment> */}
return <PostRecipe/>;
}
export default App;