import React, { useState } from "react";
import "./Login.css";

export const Login = (props) =>{
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    return (
        <div className="login">
             <h1>Login</h1>
        <form >
            <input type="text" placeholder="Email" />
            <div></div>
            <input type="password" placeholder="Password" />
            <div className='space2'></div>


            <button>Login</button>

        </form>
        <div className="link-btn" onClick={() => props.onFormSwitch('Signup')}>Don't have an account? Signup.</div>
        </div>
    )
}

export default Login;