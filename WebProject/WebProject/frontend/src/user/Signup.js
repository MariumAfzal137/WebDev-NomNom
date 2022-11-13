import React, { useState } from "react";
import "./Signup.css";

export const Signup = () =>{

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
        <div className="register">
             
        <form className="register-form" onSubmit={registerSubmit}>
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

            <button>SIGN UP</button>
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