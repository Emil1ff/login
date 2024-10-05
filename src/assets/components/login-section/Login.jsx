import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './login.css'


const Login = () => {
    return (
        <div className='login-card'>
            <h3>Login</h3>
            <form action="">
                <div className="input-container">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <label htmlFor="user">Username</label>
                    <input type="text" placeholder="Type your username" id='user' className="input-field" />
                </div>
                <div className="input-container">
                    <label htmlFor="us-pas">Password</label>
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input type="password" placeholder="Type your password" id='us-pass' className="input-field" />
                </div>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="log-btn">
                    <button type="submit">Login</button>

                </div>
            </form>

        </div>
    )
}

export default Login
