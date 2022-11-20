import React, { useState } from "react";
import "./Signup.css";

export const Signup = (props) =>{

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });

      const { name, email, password } = user;

      const registerDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const registerSubmit = async(e) => {
        e.preventDefault();
       
        const {name, email, password} = user;

        const res = await fetch("http://localhost:5000/user/signup", {
          method: "POST",
          body: JSON.stringify({
            name, email, password
          }),
          headers: {
            "content-Type" : "application/json"
          },
          
        })
        const data = await res.json();

        if(res.status=== 400 ||!data ){
          window.alert("Invalid Registeration");
          console.log("Invalid Registeration");
        }else{
          window.alert("Registeration Successful");
          console.log("Registeration Successful");

    
        }
      }

    return (
        <div className="register">
             
        <form method="POST" className="register-form">
        <div className="heading">Signup to post new recipes</div>

        <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                
                <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                
                <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                  
            <button onClick={registerSubmit}>SIGN UP</button>
            <p>
              Already have an Account?
               <span className="line">
                  <a href="/Login">Login</a>
                </span>
            </p>
        </form>
        </div>
    )
}

export default Signup;

