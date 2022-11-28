import { Container } from '@mui/system';
import React from 'react'
import Header from './Header';
import "./Profile.css";


export default function  Profile() {
  return (

        <>
        <img id="profile" src="nomnomgrey.png" alt="Avatar"></img>

        <h1 id="profile"> 
        <ul>Safa Hai</ul>
        <ul>@safahai</ul>
        </h1>

        <form id ="profile">  
        <h6> Name</h6>  
        <input id="profile" type="text" placeholder="Name"/>  <br/><br/>
        <h6> Username</h6>  
        <input id="profile" type="text" placeholder="Username"/>  <br/><br/>
        <h6> Email</h6>  
        <input id="profile" type="text" placeholder="Email"/>  <br/><br/>
        <h6> Password</h6>  
        <input id="profile" type="password" placeholder="Password"/> <br/><br/> <br/>
    
        
        <input className="profile-btn" type="button" value="Save" onClick="create()"/>  
        </form>  
        

        </>
  )
}

//export default Profile


