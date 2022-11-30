import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/home/home';
import Login from './pages/login/login';
import NotFound from './pages/not-found/notFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={ <Login /> }></Route>
        <Route path='/'      element={ <Home /> }></Route>
        <Route path='*'      element={ <NotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;