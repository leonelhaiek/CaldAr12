import React from 'react';
import '../css/home.css';
import{Link} from 'react-router-dom'

function home() {
    return(
        <div className ="box">
            <h1>CaldAr</h1>
            <div className="container">
                <button className="homeButton"><Link className="link" to='/boilers'>Boilers</Link></button>
                <button className="homeButton"><Link className="link" to='/boilersType'>Type of Boilers</Link></button>
                <button className="homeButton"><Link className="link" to='/technicians'>Technicians</Link></button>
                <button className="homeButton"><Link className="link" to='/buildings'>Buildings</Link></button>
                <button className="homeButton"><Link className="link" to='/companies'>Companies</Link></button>
            </div>
        </div>
    ); 
}

export default home;