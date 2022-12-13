import React from 'react';
import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
        <Route path='/users/add' element={<AddUser/>}></Route>
        <Route path='/users/edit/:id' element={<EditUser/>}></Route>
        <Route path='/users/:id' element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
