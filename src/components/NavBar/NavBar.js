import React from 'react';
import NavItem from './NavItem';

const NavBar = (props) => (
    <div className="navbar">
        <ul className="nav" id="myTab" role="tablist">
            {props.categories
            .map((category, index) => {
                return(
                    <NavItem 
                        category={category} 
                        filter={() => props.filter(category.className)} 
                        index={index} 
                        key={index} />
                )                
            })}                                       
        </ul>
                
        <div className="more">
            <span>More</span>
        </div>
    </div>
)

export default NavBar;