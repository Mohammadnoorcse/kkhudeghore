import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"
const Navbar = () => {
  return (
 <nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
              {/* <a class="navbar-brand" href="#/">Navbar</a> */}
              <span>Kkhude<span>G</span>hor</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/whatdo">Where we do</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page" href='https://drive.google.com/drive/u/4/folders/1Ckfs0hLG91juXNqHL6agGAau5bF3cScF' target="_blank" rel="noopener noreferrer">Stories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://drive.google.com/drive/u/4/folders/1ijARbsaOxG2Xm_T996fkLGnE1wHSnNZk" target="_blank" rel="noopener noreferrer">Research and Reports</a>
        </li>
       
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul class="dropdown-menu a">
            <li><Link class="dropdown-item" to="/about">About</Link></li>
            <li><a class="dropdown-item" href="https://sites.google.com/view/workkgr/" target="_blank" rel="noopener noreferrer">Work kkhudeghor</a></li>
            <li><Link class="dropdown-item" to="/advisor">Adivsor</Link></li>
            
            
            <li><Link class="dropdown-item" to="/team">Team</Link></li>
            <li><a class="dropdown-item" href="#./">Investor of kkhudeghor</a></li>
            <li><a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScWG-YakIXU0cunF1fBGZihQ_6G5zC5ASLPQKDDkN4v6urn8g/viewform"target="_blank" rel="noopener noreferrer">FeedBack</a></li>
          </ul>
        </li>
       
      </ul>
      
        
    </div>
  </div>
</nav>
  )
}

export default Navbar
