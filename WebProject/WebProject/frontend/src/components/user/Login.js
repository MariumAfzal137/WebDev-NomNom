import React, {useState, useContext} from "react";
import "./Login.css";
import AuthContext from "../../AuthProvider";


export const Login = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const { setAuth } = useContext(AuthContext)

    const Loginuser = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            body: JSON.stringify({
                 email, pass
              }),
              
            headers:{
                "content-Type" : "application/json"
            },
            
        });
        const data = await res.json();
        const accessToken = res.data.accessToken
      const role = res.data.role
      setAuth({ email, pass, role, accessToken })
      setEmail('')
      setPass('')
      
        if (res.status === 400 || !data){
            window.alert("Invalid Email or Password")
        }else{
            window.alert("Login Successfull");
            
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
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
            
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