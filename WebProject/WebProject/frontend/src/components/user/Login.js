import React, {  useRef, useState, useEffect, } from "react";
import "./Login.css";

export const Login = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    };


    return (
        <div className="login">
             <h1>Login</h1>
        

           
            <input className="login-input"
            type="text" 
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <input className="login-input"
            type="password" 
            placeholder="Password" 
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
            
            <button>Login</button>

       
        <p className="signup-page">
              Don't have an Account?
              <span className="line">
                {/*put router link here*/}
                <a href="./Signup">SignUp</a>
             </span>
        </p>        
                </div>
    )
}

export default Login