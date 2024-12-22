import React from "react";
import {Link} from 'react-router-dom';
import '../assets/css/components/header.css';

export const Header=()=>{
   return(
       <>
    <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">The Text Saver</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu Items
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/firstMenu">Menu 1</Link></li>
            <li><Link className="dropdown-item" to="/otherMenu">Menu 2</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    );
}
