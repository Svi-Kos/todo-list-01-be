import React from 'react'; // useEffect
import {
  useSelector,
  // useDispatch
} from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import SignInView from 'views/SignInView';
import TodosView from 'views/TodosView';

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={isLoggedIn ? <TodosView /> : <SignInView />} />
        <Route
          path="signin"
          element={isLoggedIn ? <Navigate replace to="/" /> : <SignInView />}
        />
        <Route path="*" element={<Navigate to="signin" />} />
      </Routes>
    </Container>
  );
}

export default App;
