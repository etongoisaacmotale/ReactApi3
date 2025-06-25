import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Todos from './components/Todos';

export default class App extends Component {
  render() {
    return (
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
  }
}
