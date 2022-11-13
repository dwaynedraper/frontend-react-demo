import React from 'react';
import './App.css';
import Content from './pages/Content';
import NavBar from './features/navbar/NavBar';
import Auth from './features/auth/Auth';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectIsAuthenticated } from './features/auth/authSlice';
import Sidebar from './features/sidebar/Sidebar';

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
      </div>
      {isUserAuthenticated && (
        <Content>
          <Sidebar />
        </Content>
      )}
    </>
  );
}

export default App;
