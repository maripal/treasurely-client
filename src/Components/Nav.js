import React from 'react';

import './Nav.css';

const nav = (props) => {
    return (
        <div className="navbar">
            <p className="logo">Treasurely</p>
            <button className="logoutButton">Log Out</button>
        </div>
    )
}

export default nav;