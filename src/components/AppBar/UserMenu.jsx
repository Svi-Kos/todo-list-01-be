import { useSelector, useDispatch } from 'react-redux';
import { Button, Avatar, Chip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import s from './AppBar.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUser);

  return (
    <div className={s.container}>
      <Chip
        avatar={<Avatar>{name.split('')[0].toUpperCase()}</Avatar>}
        label={name}
        color="primary"
        variant="outlined"
        size="big"
      />

      <Button
        variant="contained"
        size="small"
        onClick={() => dispatch(logout())}
        startIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </div>
  );
}

export default UserMenu;
