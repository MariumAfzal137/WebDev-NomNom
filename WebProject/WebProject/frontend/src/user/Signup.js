import React, { useState } from "react";
import "./Signup.css";

export const Signup = (props) =>{
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    return (
        <div className="register-form">
             <h1>Signup to post new recipes</h1>
        <form >
            <label htmlFor="name">Name</label>
            <div></div>
            <input type="text"/>
            <div></div>
            <label htmlFor="email">Email</label>
            <div></div>
            <input type="text"  />
            <div></div>
            <label htmlFor="username">Username</label>
            <div></div>
            <input type="text"  />
            <div></div>
            <label htmlFor="password">Password</label>
            <div></div>
            <input type="text"  />
            <div></div>
            <label htmlFor="name">Confirm Password</label>
            <div></div>
            <input type="text"  />
            <div></div>
            <button>SIGN UP</button>
            <div className='text'>Already have an account? Login </div>

        </form>
        </div>
    )
}

export default Signup;