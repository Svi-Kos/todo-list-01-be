import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from 'redux/auth/auth-operations';
import { Button, TextField, FormControl } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function SignInView() {
  const dispatch = useDispatch();
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'userName':
        return setName(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signin({ userName, password }));
    setName('');

    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          type="text"
          name="userName"
          label="Name"
          helperText="30 symbols max"
          variant="outlined"
          autoComplete="off"
          value={userName}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          helperText="6 symbols min"
          variant="outlined"
          autoComplete="off"
          value={password}
          onChange={handleChange}
          margin="dense"
        />
        <Button type="submit" variant="contained" startIcon={<LoginIcon />}>
          Sign In
        </Button>
      </FormControl>
    </form>
  );
}

export default SignInView;
