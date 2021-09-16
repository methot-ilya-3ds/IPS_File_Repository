import React from 'react'
import '../CSS/Header.css';
import { NavLink } from 'react-router-dom';

export default function FileRepository() {
    return (
        <div id="Header-Wrapper">
                <div id="Header">                
                    <span class="Header-Item Title">Simulia IPS File Repository</span>
                    <span class="Header-Item">
                        <NavLink to="/Home">Home</NavLink>
                    </span>
                    <span class="Header-Item"> <NavLink to="/Download" class="dropbtn" >Models</NavLink></span>
                    <span class="Header-Item"> <NavLink to="/Upload" class="dropbtn" >Upload</NavLink></span>
                </div>
            </div>
    )
}
