import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container header_container">
    <a class="navbar-brand" href="#"><img src='../logo.svg' /></a>
    <logo/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ORDER ONLINE</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggl" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MENU
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">GIFT CARDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">JOIN MYHOP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link location" aria-current="page" href="#">LOCATIONS</a>
        </li>
      </ul>
      <form class="d-flex">
        
    
        
      </form>
    </div>
  </div>
</nav>
 
  )
}

export default Navbar