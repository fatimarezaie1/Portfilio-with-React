import React, { useState } from "react";
import { Link ,NavLink}  from 'react-router-dom';

export default function Header(){
    const [OpenMenu, setOpenMenu] = React.useState(false)
   
    return(
            <nav>
                <Link to='/' className="site-logo "><span className="logo-circal">E</span>dera</Link>
                <div className="menu" onClick={()=>{
                    setOpenMenu(!OpenMenu)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={OpenMenu ? 'open' : ''}>
                    <li ><NavLink to='/' >Home</NavLink></li>
                    <li><NavLink to='/about' >About</NavLink> </li>
                    <li><NavLink to='/portfilio' >Portfilio</NavLink></li>
                    <li><NavLink to='/news' >News</NavLink></li>
                    <li><NavLink to='/contact' >Contact</NavLink></li>
                </ul>
            </nav>  
    )
}