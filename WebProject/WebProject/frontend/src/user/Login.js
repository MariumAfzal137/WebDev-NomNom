import React from 'react';
import "./Login.css";

const Login = () =>{
    return (
        <div className="logincontainer">
            <h1>Login</h1>
            <input type="text" placeholder="Email" />
            <div className='space'></div>
            <input type="password" placeholder="Password"/>

            <div className="login-btn">Login</div>
            <div className='text'>Don't have an account? Signup</div>

        </div>
    )
}

export default Login;