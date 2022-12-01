import React, {useState, useContext, useEffect} from "react";
import "./Login.css";
import AuthContext from "../../AuthProvider";

import axios from 'axios';
import PostRecipe from "../userRecipe/PostRecipe";
const LOGIN_URL = '/auth';

export const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [email,password])

    const { setAuth } = useContext(AuthContext)

    async function Loginuser(e)  {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/user/login", {
            
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email, password
                }),
            
        });
        
        const data = await res.json();
            
            const accessToken = res?.data?.accessToken;
            const role =  res?.data?.role;
            setAuth({ email, password, accessToken })


            

    if (res.status == 400 || !data){
        window.alert("Invalid Email or Password")
    }else{
        window.alert("Login Successfull");
        // window.location.href ='/aboutUs'
        
        
    }
 
    
        
    };


    return (
        <div className="login">
            
             <h1>Login</h1>
             <form method="POST" className="Login-form">
            <input className="login-input"
            type="text" 
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <br></br>

            <input className="login-input"
            type="password" 
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            
            <button onClick={Loginuser}>Login</button>

           
        <p className="signup-page">
              Don't have an Account?
              <span className="line">
                {/*put router link here*/}
                <a href="./Signup">SignUp</a>
             </span>
        </p>     
        </form>   
                </div>
    )
}

export default Login