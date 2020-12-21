import React from 'react';
import '../App.css';
import{Link} from 'react-router-dom'

function home() {
    const navStyle = {
        color: 'white'
    };
    return(
        <nav >
            <h3> CaldAr</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/boilers'>
                    <li> boilers</li>
                </Link>
                 <Link style={navStyle}to='/technician'>
                <li> technician</li>
                </Link>
                <Link style={navStyle}to='/buildings'>
                <li> buildings</li>
                </Link>
                <Link style={navStyle}to='/companies'>
                <li> companies</li>
                </Link>
                <Link style={navStyle}to='/boilersType'>
                <li> boilersType</li>
                </Link>
            </ul>
        </nav>
        
    ) ; 
}

export default home;