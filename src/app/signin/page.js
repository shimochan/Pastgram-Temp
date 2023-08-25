'use client'

import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import styles from './style.module.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container className={styles.container} maxWidth="xs">
      <form onSubmit={handleLogin}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <LockIcon fontSize="large" />
        </div>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className={styles.button} type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;