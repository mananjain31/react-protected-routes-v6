import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProhibitedComponent from './ProhibitedComponent';
import ProtectedComponent from './ProtectedComponent';
import PublicComponent from './PublicComponent';
import useAuth from './useAuth';

export const App = () => {
  const {auth, login, logout, RequireAuth} = useAuth();

  return <div className='app'>
    <h1>React Protected Routes <sub>react-router-dom v6</sub></h1>
    <div>Login Status : {auth ? 'logged in' : 'not logged in'}</div>
    <hr/>
    <Routes>
      <Route path='/' element={<div className='links'>
        <Link to='/public'>Public Component - Login, Logout page</Link>
        <Link to='/protected'>Protected Component </Link>
      </div>} />
      <Route path='/public' element={<PublicComponent login={login} logout={logout} auth={auth}/>} />
      <Route path='/prohibited' element={<ProhibitedComponent/>} />
      <Route path='/protected' element={
        <RequireAuth redirectTo={'/prohibited'}>
          <ProtectedComponent/>
        </RequireAuth>
      }/>
    </Routes>
  </div>;
};
