'use client'

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TextField, Button, Typography, Container } from '@mui/material';
import { logo } from '../lib/font';
import styles from './style.module.css';

const LoginForm = () => {
  const params = useSearchParams();
  const redirect = params.get('redirect') || '/home';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    router.push(redirect);
  };

  return (
    <Container className={styles.container} maxWidth="xs">
      <Typography className={[logo.className, styles.logo].join(' ')} variant="h5" align="center">
        Pastgram {params}
      </Typography>
      <form className={styles.form} onSubmit={handleLogin}>
    {/*
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <LockIcon fontSize="large" />
        </div>
        <Typography variant="h5" align="center">
          Login
        </Typography>
    */}
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