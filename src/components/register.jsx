// Register component

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth.js';


const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await registerUser({ email, username, password });

        if (result.error) {
            setResponseMessage(result.error);
        } else {
            setResponseMessage(result.message);
            setTimeout(() => navigate('/'), 1000);
        }
    };

    return (
        <div className='register-comp'>
            <h2>Chati.</h2>
            <form onSubmit={handleSubmit}>
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />

                <button type="submit" id="registerButton" className="login-button">Register</button>
            </form>
            {responseMessage && <p className="success-message">{responseMessage}</p>}
        </div>
    );
};

export default Register;
