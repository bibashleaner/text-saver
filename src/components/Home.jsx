import React from "react";
import {Link} from 'react-router-dom';
import '../assets/css/components/home.css';

export const Home = () => {
    
    return(
        <div className="home-button">
            <Link className="text-button" to='/textpath'>Text</Link>
            <Link className="sig-button" to='/sigpath'>Signature</Link>
        </div>
    );
}