import React from 'react'
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography, Box,  InputBase, Button} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Homepage from './Homepage/recipe';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
 

  export default function adminheader() {

    
      return (
        <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style = {{backgroundColor: "white", position: "sticky"}}>
          <div style = {{width: 100+'%',height: 1+'cm', backgroundColor: "#303030", textAlign: 'center'}}>
     
          {!localStorage.getItem('isLoggedIn')? 
          <> 
          
          <a style={{ color: 'white', fontSize:20, marginTop:5, letterSpacing:2, fontWeight:'bold', position:'absolute', right: 2}}>Admin Panel</a>
          </> :
          <>

          <a style={{ color: 'white', fontSize:16, letterSpacing:2, fontWeight:'bold', position:'absolute', right: 70}} onClick={() => {
           localStorage.removeItem('isLoggedIn'); console.log(localStorage.getItem('isLoggedIn'));}}href="/login">Logout</a>
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
  
              <a style={{ fontWeight:'bold', fontSize:20}} >Ingredients</a>
  
          </ul>
          
            </Toolbar>
          </AppBar>
        </Box>
        </>
      );
    
    
  }