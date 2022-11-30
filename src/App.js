import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Pages
import Main from './pages/main/main';
import LoginContainer from './pages/login/loginContainer';
import NotFound from './pages/not-found/notFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={ <LoginContainer /> }></Route>
        <Route path='/'      element={ <Main /> }></Route>
        <Route path='*'      element={ <NotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;