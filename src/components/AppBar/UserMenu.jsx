import {
  useSelector,
  // useDispatch
} from 'react-redux';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { getUser } from 'redux/auth/auth-selectors';
// import { logout } from 'redux/auth/auth-operations';

import s from './AppBar.module.css';

function UserMenu() {
  // const dispatch = useDispatch();
  const name = useSelector(getUser) || 'User Name';

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
        // onClick={() => dispatch(logout())}
      >
        Log Out
      </Button>
    </div>
  );
}

export default UserMenu;
