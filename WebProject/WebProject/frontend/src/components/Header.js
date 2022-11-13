import React from 'react'

import {AppBar, Toolbar, Typography, Box,  InputBase, Button} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from '@mui/system';


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
  
  export default function Header() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style = {{backgroundColor: "white"}}>
          <Toolbar>
          <Box
            component="img"
            sx={{
            height: 100,
            }}
            alt="Your logo."
            src="nomnomwhite.png"
        />
        <ul className="navbar__ul">


            <a href="">Home</a>

            <a href="">My Recipes</a>

            <a href="">About Us</a>

        </ul>

            <Search >
              <SearchIconWrapper>
                <SearchIcon style={{ fill: 'black' }}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>


              <AccountCircleIcon fontSize="large" style={{ fill: 'black', marginLeft: '15rem'}} />  

          </Toolbar>
        </AppBar>
      </Box>
    );
  }







// const Header = () => {
//   return <AppBar style = {{backgroundColor: "white"}}>
//         <Toolbar>
//         <Box
//             component="img"
//             sx={{
//             height: 100,
//             }}
//             alt="Your logo."
//             src="nomnomwhite.png"
//         />
//         </Toolbar>

//   </AppBar>;
  
// }

//export default Header