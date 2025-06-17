import React from 'react';
import './Header.css'; // Import the CSS file for styling
// import '../../../styles/people.module.css'; // Import the people module CSS for global styles
function Header({children}) {
  return (
    <div
      className="header-image"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className='heading' style={{ textDecoration: 'underline' }}>{children}</h1>
    </div>
  );
}

export default Header;
