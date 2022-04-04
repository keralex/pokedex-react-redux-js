import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img alt="logo" src={imgUrl} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
