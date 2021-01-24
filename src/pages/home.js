import React from 'react';
import '../css/home.css';
import{Link} from 'react-router-dom'

function home() {
    return(
        <div className ="box">
            <h1>CaldAr</h1>
            <div className="container">
                <button className="homeButton"><Link className="link" to='/resources/boilers'>Boilers</Link></button>
                <button className="homeButton"><Link className="link" to='/resources/boilersType'>Types of Boilers</Link></button>
                <button className="homeButton"><Link className="link" to='/resources/technicians'>Technicians</Link></button>
                <button className="homeButton"><Link className="link" to='/resources/buildings'>Buildings</Link></button>
                <button className="homeButton"><Link className="link" to='/resources/companies'>Companies</Link></button>
            </div>
        </div>
    ); 
}

export default home;