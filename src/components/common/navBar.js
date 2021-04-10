import React from 'react';
import {Link} from "react-router-dom";
const navBar = () => {
    return ( 
        <nav class="navbar navbar-light bg-light navbar-expand-lg  ">
            <Link className="navbar-brand" to="/">Vidly</Link>

            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link className="nav-link" to="/movies">Movies</Link>
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/customers">Costumers</Link>
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/rentals">Rentals</Link>
                </li>
            </ul>
            
        </nav>
     );
}
 
export default navBar;