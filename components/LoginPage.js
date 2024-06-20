import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useAuth } from '../app/AuthContext';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => {
    console.log(data); // You can perform login logic here
    login(); // For now, just login without validation
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('username')}
          label="Username"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          {...register('password')}
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
