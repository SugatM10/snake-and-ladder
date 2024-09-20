import React, { useState } from 'react';
import './registration.css';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            />
        </div>
        <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            />
        </div>
        <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            />
        </div>
        <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            />
        </div>
        <div className="form-submit">
            <button type="submit">Register</button>
        </div>
        </form>
    );
    }

    export default Registration;
