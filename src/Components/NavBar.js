import React, { Component } from 'react'
import {Link } from 'react-router-dom';

export class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">general</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">technology</Link></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar


//46a2a77d5cda4649b2341423987f7660