import { useState } from 'react';
import './Navigation.css';
import NavLink from './NavLink/NavLink';

type NavigationProps = {
    links: any[]
}
const Navigation = (props: NavigationProps) => {
    const [state, setState] = useState({

    });
    
    const items = [];

    for (const [index, item] of props.links.entries()) {
        items.push(<li key={index}><NavLink url={item.url} label={item.label}/></li>);
    }

    return <ul>
        {items}
    </ul>

}

export default Navigation;