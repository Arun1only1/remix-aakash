import { Button, TextField } from '@mui/material';
import { useNavigate } from '@remix-run/react';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant='contained'
        color='success'
        onClick={() => {
          navigate('/login');
        }}
      >
        go to login
      </Button>

      <TextField label='Email' variant='outlined' />

      <input placeholder='enter your age' />
    </div>
  );
};

export default Register;
