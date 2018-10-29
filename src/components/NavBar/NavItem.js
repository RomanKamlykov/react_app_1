import React from 'react';

// при загрузке первому элементу 'NavItem' с параметром 'props.index === 0' устанавливается класс 'nav-link active'
const NavItem = (props) => (
    <li className="nav-item">
        <a className={props.index === 0 ? 'nav-link active' : 'nav-link'} 
            id={props.category.className + "-tab"} 
            data-toggle="tab" 
            href={props.category.className} 
            role="tab" 
            aria-controls={props.category.className} 
            aria-selected="true"
            onClick={props.filter}>{props.category.name}
        </a>
    </li>
)

export default NavItem;