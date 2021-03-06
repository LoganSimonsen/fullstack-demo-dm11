import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.svg";

const Header = () => {
    return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <div>
      <Link to='/'>
         <p>Home</p>
      </Link>
      <Link to='/login'>
         <p>Login</p>
      </Link>
      </div>
    </header>
    )
}

export default Header;