import React, { Fragment, useContext, useRef } from "react";
import classes from './Login.module.css';
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Login = () => {
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    
    const history = useHistory();
    const authCntx = useContext(AuthContext);

    const submitHandler = async(event) => {
        event.preventDefault();
    }
    
    
           
        
return(
    <Fragment>
    <section className={classes.wrapper}>
        <h1>User Login</h1>
            <form onSubmit={submitHandler} className={classes['login-form']}>
                <label htmlFor="email-id">Email ID</label>
                <input type="email" id="email" 
                    required 
                    ref={emailInputRef} 
                    placeholder="enter your email..." 
                />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" 
                required 
                ref={passwordInputRef} 
                placeholder="enter password..." 
                />
                <Button>Login</Button>
            </form>
    </section>
    </Fragment>
    );
};

export default Login;