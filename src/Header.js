import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './uexelogo.png';
import './Header.css';

//FUNTION:

  function Header(){
    return(
        <div className="Header">
        <img src={logo} alt="logo"/>
        </div>
    );
}
export default Header;
