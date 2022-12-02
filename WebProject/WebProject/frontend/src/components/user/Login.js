import React, {useRef, useState, useContext, useEffect} from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { authActions } from "../../store"; 



export const Login = () =>{

    const { auth, setAuth } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const dispath = useDispatch();
    //const from = location.state?.from?.pathname || "/";

    const LOGIN_URL = 'http://localhost:5000/user/login'
    
    const errRef = useRef();


    useEffect(() => {
        setErrMsg('');
    }, [email, password])



    const sendRequest = async () => {
        const res = await axios.post(LOGIN_URL,
            JSON.stringify({ email, password }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            }
        ).catch((err) => console.log(err));
    
        const data = await res.data;
        console.log(data);
        return data;
      };
    

    const Loginuser = async (e) => {
        e.preventDefault();

        sendRequest()
        .then((data) => localStorage.setItem("email", email))
        .then(() => dispath(authActions.login()))
        .then(() => navigate("/"));


        //try {
            // const response = await axios.post(LOGIN_URL,
            //     JSON.stringify({ email, password }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: false
            //     }
            // );
            // console.log(JSON.stringify(response?.data));
            // //console.log(JSON.stringify(response));
            // const data = await res.data;
            // const accessToken = response?.data?.accessToken;
            // const role = response?.data?.role;

            

            // setAuth({email},{accessToken});
            // setEmail('');
            // setPassword('');
            // navigate(from, { replace: true });
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
    }



    // async function Loginuser(e)  {
    //     e.preventDefault();

    //    const res = await fetch("http://localhost:5000/user/login", {
            
    //             method: "POST",
    //             headers:{
    //                 "Content-Type" : "application/json"
    //             },
    //             body: JSON.stringify({
    //                 email, password
    //             }),
            
    //     });

    //     const data = res.json();



    //     if (res.status == 400 || !data){
    //         window.alert("Invalid Email or Password")
    //     }else {
    //         const accessToken = res?.data?.accessToken;
    //         const role =  res?.data?.role;
    //         setAuth( {email, accessToken, role})
    //         setEmail('');
    //         setPassword('');
    //         window.alert("Login Successfull");
    //         navigate(from, { replace: true });
            
    //     // window.location.href ='/aboutUs'
    //     }
 
    
        
    // };


    return (
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
    )
}

export default Login