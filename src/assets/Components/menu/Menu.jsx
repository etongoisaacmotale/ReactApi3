import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { Container } from 'react-bootstrap';

export default class Menu extends Component {
  render() {
    return (
    

      <nav className="menu">
        <h1>Api Menu</h1>
        <NavLink to="/posts" activeClassName="active">Posts</NavLink>
        <NavLink to="/comments" activeClassName="active">Comments</NavLink>
        <NavLink to="/albums" activeClassName="active">Albums</NavLink>
        <NavLink to="/photos" activeClassName="active">Photos</NavLink>
        <NavLink to="/todos" activeClassName="active">Todo</NavLink>
      </nav>

    );
  }
}
