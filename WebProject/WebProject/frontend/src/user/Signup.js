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

      const registerSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        //dispatch(register(myForm));
      };

    return (
        <div >
             
        <form className="register-form" onSubmit={registerSubmit}>
        <h1>Signup to post new recipes</h1>
        <label htmlFor="password">Name</label>
        <div className="signUpName">
                  <input
                    type="text"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <label htmlFor="password">Email</label>
                <div className="signUpEmail">
                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <label htmlFor="password">Password</label>
                <div className="signUpPassword">
                  <input
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
            <button>SIGN UP</button>
            <p>
              Already have an Account?<br />
               <span className="line">
                  <a href="/Login">Login</a>
                </span>
            </p>
        </form>
        </div>
    )
}

export default Signup;