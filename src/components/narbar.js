import './narbar.css'

import React from 'react';
import {NavLink,HashRouter}from 'react-router-dom'

const Narbar = props =>(
<nav className="site-header sticky-top py-1">
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <HashRouter>
      <NavLink exact to="/" className="py-2 d-none d-md-inline-block">Timer</NavLink>
      <span></span>
      <NavLink exact to="/" className="py-2 d-none d-md-inline-block">Solves</NavLink>
      <span></span>
      <NavLink exact to="/" className="py-2 d-none d-md-inline-block">Stats</NavLink>
      <span></span>
      <NavLink exact to="/" className="py-2 d-none d-md-inline-block">Options</NavLink>
      <span></span>
    </HashRouter>
  </div>
</nav>
);
export default Narbar
