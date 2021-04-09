import './NavLink.css';
import React from "react";
import { NavLink as Link } from 'react-router-dom';

type NavLinkProps = {
    label: string
    url: string
}
const NavLink = (props: NavLinkProps) => {

    return <Link exact className={`nav-link`} to={props.url}>{props.label}</Link>
        
}

export default NavLink;