import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated import
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Updated hook

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/signup', { username, password });
            localStorage.setItem('username', username);
            navigate('/'); // Updated to use navigate
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="text-center signup-container">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignup}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Signup</Button>
            </Form>
        </div>
    );
};

export default Signup;
