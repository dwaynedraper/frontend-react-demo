import React from 'react';
import './App.css';
import Content from './pages/Content';
import NavBar from './components/NavBar';
import Auth from './features/auth/Auth';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectIsAuthenticated } from './features/auth/authSlice';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

function App() {
  const isUserAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  return (
    <div>
      <NavBar />
      {/* <div className="App">
        {!isUserAuthenticated && (
          <Auth />
        )}
      </div> */}
      <Content>
        <Sidebar />
        {/* <Table />
        <Table /> */}
        <p> Just saying</p>
      </Content>
    </div>
  );
}

export default App;
