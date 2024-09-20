import React, { useEffect, useState } from 'react';
import './login.css';
import all from './all.png';
import { Navigate, useNavigate } from "react-router-dom";

function LoginBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleCreateAccountClick = () => {
        navigate('/registration');
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication and handle login
    
    if (username === 'abc' && password === '012') {
        navigate('/Die');
    } else {
        alert('Incorrect username or password');
    }
};
    

    return (
        <div className="loginbox">
            <img src={all} className="avatar" alt="image avatar" />
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <input type="submit" value="Login" />
                <input type="submit" value="Sign in with Google" />
                <a href="#">Forgot Password?</a>
                <br />
                <a href="#" onClick={handleCreateAccountClick}>Make an account</a>
                {/* <a href="./Registration">Make an account</a> */}
            </form>
        </div>
    );
}

export default LoginBox;





