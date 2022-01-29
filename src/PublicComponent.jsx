import { Link, useLocation, useNavigate } from "react-router-dom"
import React from "react";

export default function ({auth, login, logout}) {
    const location = useLocation();
    const navigate = useNavigate();

    return <div className="component">
        <div className="buttons">
            {
                !auth ?
                    <button onClick={()=>login(()=>{
                        navigate('/', {from : location});
                    })}>Login</button>
                :
                    <button onClick={()=>logout(()=>{
                        navigate('/', {from : location});
                    })}>Logout</button>
            }
        </div>
        <Link to='/'>Home</Link>
    </div>
}