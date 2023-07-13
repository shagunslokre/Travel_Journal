import React from "react";

import logo from '../assets/downtown.jpg'

const Header = () => {
    return (
        <nav>
            <img className="nav__img" src={logo} alt="downtown" />
            <h3 className="nav__title">My Travel Journal</h3>
        </nav>
    )
}

export default Header;