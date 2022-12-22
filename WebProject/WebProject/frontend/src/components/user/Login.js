import React, {useRef, useState, useEffect} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import "./Login.css";
import Header from '../Header';
import { useDispatch } from "react-redux";
import { authActions } from "../../store"; 



export const Login = () =>{


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const dispath = useDispatch();
    const from = location.state?.from?.pathname || "/home";

    const LOGIN_URL = 'http://localhost:5000/user/login'
    
    const errRef = useRef();


    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    

    const Loginuser = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data));
            const data = await response.data;
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            localStorage.setItem('user', email);
            localStorage.setItem('isLoggedIn', accessToken);
            localStorage.setItem('role', role);

            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        
        <>
        <Header/>

  
        <div className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
                <a href="./Signup">SignUp</a>
             </span>
        </p>     
        </form>   
                </div>
                </>
    )
}

export default Login