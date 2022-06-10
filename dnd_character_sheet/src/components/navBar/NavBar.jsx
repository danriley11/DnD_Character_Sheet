import React from 'react';

import '../../styles/Header.css';

import Header from './Header';

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr;
// `;

function NavBar() {
  return (
    <div>
      <nav>Navbar</nav>
      <header>
        <Header />
      </header>
      {/* <main></main> */}
    </div>
  );
}

export default NavBar;
