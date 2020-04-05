import React from 'react'
import './Footer.scss'

import logo from 'assets/img/05_footer/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="content">
      <div className="customer">
          <h4>CUSTOMER SERVISE</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#updates">Updates</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>

        <div className="items">
          <h4>ITEMS</h4>
          <ul>
            <li><a href="#items/rings">Rings</a></li>
            <li><a href="#items/hammers">Thor’s hammer</a></li>
            <li><a href="#items/axes">Axes</a></li>
            <li><a href="#items/pendants">Pendants</a></li>
            <li><a href="#items/chains">Chais and bracelets</a></li>
            <li><a href="#items/gold">Gold</a></li>
          </ul>
        </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="contacts">
        <h4>CONTACT</h4>
        <form method="post">
          <input type="text" name="name" placeholder="Your name" autoComplete="off" />
          <input type="text" name="email" placeholder="Your e-mail" autoComplete="off" />
          <input type="text" name="message" placeholder="Message" autoComplete="off" />
          <input type="submit" onClick={(e) => e.preventDefault()} value="Send" />
        </form>
      </div>
    </div>
  </footer>
  )
}