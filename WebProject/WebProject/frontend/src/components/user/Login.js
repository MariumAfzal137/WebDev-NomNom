import React, {  useRef, useState, useEffect, } from "react";
import "./Login.css";

export const Login = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        useRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pass])

    const handleSubmit = async (e) => {
        e.preventDefault();
    };


    return (
        <div className="login">
             <h1>Login</h1>
        <form className="loginForm" onSubmit={handleSubmit}>

            <div className="login-email">
            <input 
            type="text" 
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="login-password">
            <input 
            type="password" 
            placeholder="Password" 
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
            </div>


            <button>Login</button>

        </form>
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

export default Login;