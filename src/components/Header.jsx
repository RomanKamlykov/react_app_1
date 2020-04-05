import React from 'react'
import './Header.scss'

import logo from 'assets/img/00_header/logo.png'
import shopping_cart from 'assets/img/00_header/shopping_cart.png'
import door_in from 'assets/img/00_header/door_in.png'

export default function Header() {
  return (
    <header className="header">
      <div className="introduction">
        <p>Handmade jewelry of the Viking Age and the ancient Slavs</p>
      </div>

      <div className="icons">
        <a href="#auth" className="auth">
          <img src={door_in} alt="" />
        </a>
        <a href="#basket" className="basket">
          <img src={shopping_cart} alt="" />
        </a>
      </div>

      <nav className="nav">
        <div className="burger"></div>
        <ul>
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#updates">Updates</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li className="logo">
            <a href="#home">
              <img src={logo} alt="" />
            </a>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="#policies">Policies</a></li>
        </ul>
      </nav>
    </header>
  )
}