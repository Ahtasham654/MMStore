/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import user from '../images/user.svg';
import cart from '../images/cart.svg';

export const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
      <div className="container">
        <Link className="navbar-brand" to="/">Furni<span>.</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/shop' ? 'active' : ''}`}>
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/aboutus' ? 'active' : ''}`}>
              <Link className="nav-link" to="/aboutus">About us</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/service' ? 'active' : ''}`}>
              <Link className="nav-link" to="/service">Services</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a className="nav-link" href="#"><img src={user} alt='user'/></a></li>
            <li><Link className="nav-link" to="/cart"><img src={cart} alt='cart'/></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
