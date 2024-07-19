import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import pop from '../assets/pop.png'; 

const Header = () => {
  return (
    <header className="bg-dark text-center py-3">
      <div className="container1">
        <div className="row">
          <div className="col">
            <img src={pop} alt="Popcorn" style={{ maxWidth: '50px' }} />
          </div>
          <div className="col">
            <h2 className="text-danger">Movies</h2>
          </div>
          <div className="col">
            <img src={pop} alt="Popcorn" style={{ maxWidth: '50px' }} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

