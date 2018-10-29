import React from 'react';
import './Footer.scss';

const Footer = () => (
    <div id="footer">
        <div>
            <div className="customer">
                <h4>CUSTOMER SERVISE</h4>
                <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Updates</li>
                    <li>Reviews</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>

            <div className="items">
                <h4>ITEMS</h4>
                <ul className="list-unstyled">
                    <li>Rings</li>
                    <li>Thor’s hammer</li>
                    <li>Axes</li>
                    <li>Pendants</li>
                    <li>Chais and bracelets</li>
                    <li>Gold</li>
                </ul>
            </div>
            
            <div className="contacts">
                <h4>CONTACT</h4>
                <ul className="list-unstyled">
                    <li><input type="text" name="name" id="" placeholder="Your name" autoComplete="off" /></li>
                    <li><input type="text" name="email" id="" placeholder="Your e-mail" autoComplete="off" /></li>
                    <li><input type="text" name="message" id="" placeholder="Message" autoComplete="off" /></li>
                </ul>    
                <br />        
                <button type="button" className="btn btn-dark">SEND</button>
            </div>
        </div>
        <img src="img/05_footer/logo.png" alt="" className="logo" />
    </div>
)

export default Footer;