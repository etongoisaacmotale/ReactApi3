import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <nav style={{ padding: '1rem', background: '#eee', marginBottom: '2rem' }}>
        <Link to="/posts" style={{ marginRight: '1rem' }}>Posts</Link>
        <Link to="/comments" style={{ marginRight: '1rem' }}>Comments</Link>
        <Link to="/albums" style={{ marginRight: '1rem' }}>Albums</Link>
        <Link to="/photos" style={{ marginRight: '1rem' }}>Photos</Link>
        <Link to="/todos">Todo</Link>
      </nav>
    );
  }
}
