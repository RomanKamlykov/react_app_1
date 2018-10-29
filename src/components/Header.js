import React from 'react';
import './Header.scss';

const Header = () => (
    <div id="header">
        <div className="introduction">
            <p>Handmade jewelry of the Viking Age and the ancient Slavs</p>
        </div>

        <div className="icons">
            <img src="img/00_header/shopping_cart.png" alt="" className="shopping_cart" />
            <img src="img/00_header/door_in.png" alt="" className="door_in" />    
        </div>

        <div className="nav">
            <div className="burger"></div>
            <ul className="list-unstyled">
                <li>CATALOG</li>
                <li>UPDATES</li>
                <li>REVIEWS</li>
                <li>ABOUT</li>
                <li>CONTACTS</li>
                <li>POLICIES</li>
            </ul>    

            <img src="img/00_header/logo.png" alt="" className="logo" />    
            <div className="ellipse"></div>
        </div>
    </div>
)

export default Header;