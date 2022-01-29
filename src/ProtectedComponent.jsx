import { Link, useNavigate } from "react-router-dom"
import React from "react";

export default function ({login, logout}) {
    const navigate = useNavigate();
    return <div className="component">
        Welcome, You Successfully accessed the protected component !!
        <Link to='/'>Home</Link>
    </div>
}