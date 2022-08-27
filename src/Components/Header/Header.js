import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
        <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="d-flex justify-content-between p-1 nav22">
    <div className='mx-5'>
    <a className="navbar-brand logo" href="/">
      <img className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt='logo'  width="95" height="30"/>
    </a>
    </div>
    <div className='me-4'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" width="40" />
    </div>
  </div>
</nav>

        </div>
    
    
    </div>
  )
}

export default Header