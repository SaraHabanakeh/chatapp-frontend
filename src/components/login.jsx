// login component

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth.js';
import { handleLogin } from '../utils/auth.js';
import appImage from '../chat-img.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await loginUser({ email, password });

        if (result.error) {
            setErrorMessage(result.error);
        } else {
            handleLogin(result.token, result.email, result.username);
            navigate('/contacts');
        }
    };

    return (
        <div className="login-comp">
            <img src={appImage} alt="App visual" className="chat-img" />
            <h2>Chati.</h2>

            <form onSubmit={handleSubmit}>
                <input id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" id= "loginButton" className="login-button">Login</button>
            </form>

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <p>
                Don't have an account? <Link to="/register">Sign up here</Link>
            </p>
        </div>
    );
}
export default Login;
