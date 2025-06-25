import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
     <div>
      <p>The available nested routes are:</p>   
 <ul className="nav-list">
  <li><Link to="/Comments" className="btn btn-link">Comments</Link></li>
  <li><Link to="/Posts" className="btn btn-link">Posts</Link></li>
  <li><Link to="/Photos" className="btn btn-link">Photos</Link></li>
  <li><Link to="/Album" className="btn btn-link">Albums</Link></li>
</ul>
  
     </div>
    );
  }
}
