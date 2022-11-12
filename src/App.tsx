import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/login/Login';
import Content from './pages/Content';
import SignUp from './pages/SignUp';
import NavBar from './pages/NavBar';
import { useToggle } from './hooks/useToggle';
import Auth from './features/auth/Auth';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectIsAuthenticated } from './features/auth/authSlice';

function App() {
  const isUserAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  return (
    <>
      <NavBar />
      <div className="App">
        {!isUserAuthenticated && (
          <Auth />
        )}
        {isUserAuthenticated && (
          <Content>

          </Content>
        )}
      </div>
    </>
  );
}

export default App;
