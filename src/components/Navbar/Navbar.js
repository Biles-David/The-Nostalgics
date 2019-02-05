import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <h1 className='navbar_title'>The Nostalgics</h1>
        <div className='navbar_login_container'>
          <div className='navbar_login_img' />
          {/* <img src='/images/login.png' alt='login'/> */}
          <h1 className='navbar_login_title'>LOGIN</h1>
        </div>
      </div>
    );
  }
}

export default Navbar;