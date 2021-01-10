import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
           <ul>
                <Link className="link" to="/">Travel Back</Link>
            </ul> 
        </div>
    )
}

export default NavBar
