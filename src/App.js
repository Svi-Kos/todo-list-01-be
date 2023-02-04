import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import {
  getIsLoggedIn,
  getAuthError,
  getIsRefreshing,
} from 'redux/auth/auth-selectors';
import { refreshUser } from 'redux/auth/auth-operations';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import SignInView from 'views/SignInView';
import TodosView from 'views/TodosView';

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const authError = useSelector(getAuthError);
  const isRefreshing = useSelector(getIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {authError && <Alert severity="error">Ooops! Try again.</Alert>}
      {isRefreshing ? (
        <CircularProgress />
      ) : (
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <TodosView /> : <SignInView />}
          />
          <Route
            path="signin"
            element={isLoggedIn ? <Navigate replace to="/" /> : <SignInView />}
          />
          <Route path="*" element={<Navigate to="signin" />} />
        </Routes>
      )}
    </Container>
  );
}

export default App;
