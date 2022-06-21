import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Sixth navbar example">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarsExample06">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          <li className="nav-item">
         <a className='nav-link' href="/">Anasayfa</a>
          </li>
          <li className="nav-item">
       <a className='nav-link'  href="/seferler">Seferler</a>
          </li>
          <li className="nav-item">
        <a className='nav-link'  href="/biletlerim">Biletlerim</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   
  )
}

export default Header