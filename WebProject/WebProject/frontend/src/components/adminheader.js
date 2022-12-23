import React from 'react'
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography, Box,  InputBase, Button} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Homepage from './Homepage/recipe';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store"; 


 

  export default function AdminHeader() {

    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.isLoggedIn);

      return (
        <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style = {{backgroundColor: "white", position: "sticky"}}>
          <div style = {{width: 100+'%',height: 1+'cm', backgroundColor: "#303030", textAlign: 'center'}}>
     
          {!loggedIn? 
          <> 
          
          <a style={{ color: 'white', fontSize:20, marginTop:5, letterSpacing:2, fontWeight:'bold', position:'absolute', right: 2}}>Admin Panel</a>
          </> :
          <>

          <a style={{ color: 'white', fontSize:16, letterSpacing:2, fontWeight:'bold', position:'absolute', right: 70}} onClick={() => {
           dispatch(authActions.logout());
           }}href="/login">Logout</a>
           </>
           }
          </div>
  
            <Toolbar>
            
            <Box
              component="img"
              sx={{
              height: 100,
              }}
              alt="NomNom."
              src="nomnomwhite.png"
          />
          <ul className="navbar__ul">
  
  
              <a href="" style={{ fontWeight:'bold',marginLeft:300, fontSize:20}}>Users</a>
  
              <a href="/allrecipes" style={{ fontWeight:'bold',  fontSize:20}}>Recipes</a>
  
              <a href="/allingredients" style={{ fontWeight:'bold', fontSize:20}} >Ingredients</a>
  
          </ul>
          
            </Toolbar>
          </AppBar>
        </Box>
        </>
      );
    
    
  }
