import React from 'react'
import './CSS/Header.css';
import { NavLink } from 'react-router-dom';

export default function FileRepository() {
    return (
        <div id="Header-Wrapper">
                <div id="Header">                
                    <span class="Header-Item Title">Simulia IPS File Repository</span>
                    <span class="Header-Item">
                        <NavLink to="/Home">HOME</NavLink>
                    </span>
                    <span class="Header-Item dropdown">
                        <NavLink to="/Download" class="dropbtn" >DOWNLOAD</NavLink>
                        <div class="dropdown-content">
                            <NavLink to="/Model-Download.html">3D Models</NavLink>
                            <NavLink to="/Video-Download.html">Videos</NavLink>
                            <NavLink to="">Audio</NavLink>
                        </div>
                    </span>
                </div>
            </div>
    )
}
