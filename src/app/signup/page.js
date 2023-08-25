'use client'

import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import styles from './style.module.css';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <Container className={styles.container} maxWidth="xs">
      <form onSubmit={handleSignup}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <PersonAddIcon fontSize="large" />
        </div>
        <Typography variant="h5" align="center">
          Sign Up
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
        <TextField
          label="Confirmation"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
        <Button className={styles.button} type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
