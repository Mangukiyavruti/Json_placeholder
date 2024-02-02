import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Comments from './Comments';
import { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Albums from './Albums';
import Image from './Image';
import Todos from './Todos';
import Users from './Users';



function App() {
  return (
    <div className="App">
      <>
      
        <Routes>
          
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Post' element={<Post />} ></Route>
          <Route path='/Comments' element={<Comments />} ></Route>
          <Route path='/Albums' element={<Albums />} ></Route>
          <Route path='/Image' element={<Image />} ></Route>
          <Route path='/Todos' element={<Todos />} ></Route>
          <Route path='/Users' element={<Users />} ></Route>
        </Routes>
        
      </>
    </div>
  );
}

export default App;
