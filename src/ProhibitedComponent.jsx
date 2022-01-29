import { Link, useLocation, useNavigate } from "react-router-dom"
import React from "react";

export default function () {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    return <div className="component">
        <p> 
            Prohibited to access route : {location.state?.from?.pathname}
            <br/>Login to continue : <Link to='/public'>Login Page</Link>
        </p>
        <Link to='/'>Home</Link>
    </div>
}