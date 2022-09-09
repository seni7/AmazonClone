import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import {useHistory} from "react-router-dom";
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const login = event =>{
        event.preventDefault();//prevent refrash
    //login part
    
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            //logged in and redirect to home page
           
                if (userCredential)
                    navigate("/");
            })
            .catch((error) => alert(error.message));
    };

    const register = event =>{
        event.preventDefault();//prevent refrash
                //registor logic
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            if (userCredential)
            navigate("/");
            // Signed in 
            // const user = userCredential.user;

        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };

  return (
    <div className='login'>
           <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=''
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={login}
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>

                <button onClick={register}
                    className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
    </div>
  )
}

export default Login