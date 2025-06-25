<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Todos from './components/Todos';
=======
import React, { Component } from 'react'
import Album from './assets/Components/album/Album'
import Comments from './assets/Components/comments/Comments'
import Menu from './assets/Components/menu/Menu'
import Posts from './assets/Components/posts/Posts'
import Todos from './assets/Components/todos/Todos'
import Photos from './assets/Components/photos/Photos'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
>>>>>>> 0d05854 (made some changes to app file, by adding routing)

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className="container">
          <Menu />
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
      </Router>
    );
=======
      <div>
      <BrowserRouter>
    <div className='container'>
      <Routes>
      <Route path="/" element={<Menu />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/Posts" element={<Posts/>} />
        <Route path="/Album" element={<Album />} />
        <Route path="/Photos" element={<Photos />} />
        </Routes>

</div>
</BrowserRouter>
</div>

    )
>>>>>>> 0d05854 (made some changes to app file, by adding routing)
  }
}
