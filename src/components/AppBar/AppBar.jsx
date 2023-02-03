import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu';
import s from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Typography variant="body1">Sign in to start adding tasks</Typography>
      )}
    </header>
  );
}

export default AppBar;
