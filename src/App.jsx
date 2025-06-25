import React, { Component } from 'react'
import Album from './assets/Components/album/Album'
import Comments from './assets/Components/comments/Comments'
import Menu from './assets/Components/menu/Menu'
import Posts from './assets/Components/posts/Posts'
import Todos from './assets/Components/todos/Todos'
import Photos from './assets/Components/photos/Photos'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/albums" element={<Album />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
