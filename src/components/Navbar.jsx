import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchOption, handleSearchOptionChange, searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Profile <br></br> Explorer</Link>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Search by {searchOption}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => handleSearchOptionChange('name')}>Name</button></li>
            <li><button className="dropdown-item" onClick={() => handleSearchOptionChange('email')}>Email</button></li>
            <li><button className="dropdown-item" onClick={() => handleSearchOptionChange('location')}>Location</button></li>
            <li><button className="dropdown-item" onClick={() => handleSearchOptionChange('role')}>Role</button></li>
          </ul>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder={`Search by ${searchOption}`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/homepage" className="nav-link">Profiles</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">Settings</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
