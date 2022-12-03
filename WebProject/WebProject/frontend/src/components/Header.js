import React from 'react'
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography, Box,  InputBase, Button} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Homepage from './Homepage/recipe';



import AccountCircleIcon from '@mui/icons-material/AccountCircle';



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
  
  import { useState } from "react";

  export default function Header() {

    
    
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
      if (searchInput.length > 0) {
       const url="http://localhost:5000/recipe/searchrecipes?keyword="+searchInput;
        console.log(url);
        localStorage.setItem('url',url)
        

      }
    
    
    };
    
      return (
        <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style = {{backgroundColor: "white", position: "sticky"}}>
          <div style = {{width: 100+'%',height: 1+'cm', backgroundColor: "#303030", textAlign: 'center'}}>
     
          <text style={{ color: 'white', fontSize:16, letterSpacing:2}}>Want to share your recipe?</text>
          <a style={{ color: 'white',fontSize:16, letterSpacing:2, fontWeight:'bold'}}href="/signup">Sign Up</a>
          <a style={{ color: 'white', fontSize:16, letterSpacing:2, fontWeight:'bold', position:'absolute', right: 2}}href="/login">Login</a>
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
  
  
              <a href="/home" >Home</a>
  
              <a href="/myrecipes">My Recipes</a>
  
              <a href="/aboutUs">About Us</a>
  
          </ul>
          
              <Search >
                <SearchIconWrapper>
                  <SearchIcon style={{ fill: 'black' }}/>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleChange}
                  value={searchInput}
                />
                </Search><a href="/homesearch">Search</a>
  
              <Link to="/myProfile">
                <AccountCircleIcon fontSize="large" style={{ fill: 'black', marginLeft: '15rem'}} />  
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        </>
      );
    
    
  }







