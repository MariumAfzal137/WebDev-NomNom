import './App.css';
import React, { useEffect }  from 'react';
import { Route, Routes} from "react-router-dom";

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

import Main from './components/Admin/main'
import RecipeCrud from './components/Admin/recipe-crud'
import ApproveRecipe from './components/Admin/approverecipe';

 function App() {
  
//   const [url, setUrl] = useState("");
//     const dispath = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   console.log(isLoggedIn);

  const loggedIn = localStorage.getItem('isLoggedIn');
  const loggedInRole = localStorage.getItem('role');
  console.log(loggedIn);


  return(

    <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/myProfile" >
                {loggedIn && loggedInRole == "user" && <Route index element={<Profile />} />}
                {!loggedIn && <Route index element={<Login />} />}
                {loggedInRole == "admin" && <Route index element={<Login />} />}
            </Route>

            <Route path="/myrecipes" >
            {loggedIn && loggedInRole == "user" && <Route index element={<MyRecipe />} />}
                {!loggedIn && <Route index element={<Login />} />}
                {loggedInRole == "admin" && <Route index element={<Login />} />}
            </Route>

            <Route path="/postrecipe" >
            {loggedIn && loggedInRole == "user" && <Route index element={<PostRecipe />} />}
                {!loggedIn && <Route index element={<Login />} />}
                {loggedInRole == "admin" && <Route index element={<Login />} />}
            </Route>

            <Route path="/allrecipes" >
                {loggedIn && loggedInRole == "admin" && <Route index element={<RecipeCrud />} />}
                {!loggedIn && <Route index element={<Login />} />}
                {loggedInRole == "user" && <Route index element={<Login />} />}
            </Route>
            <Route path="/adminhome" >
                {loggedIn && loggedInRole == "admin" && <Route index element={<Main url=""/>} />}
                {!loggedIn && <Route index element={<Login />} />}
                {loggedInRole == "user" && <Route index element={<Login />} />}
            </Route>

            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/recipedetail" element={<RecipeDetail />} />
            <Route path="/home" element={<Homepage url=""/>} />
            <Route path="/homesearch" element={<Homepage url="http://localhost:5000/recipe/searchrecipes?keyword=fried"/>} />

       </Routes>
       


   )
    }

export default App;
