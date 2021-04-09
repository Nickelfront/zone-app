import { useState } from 'react';
import './Navigation.scss';
import NavLink from './NavLink/NavLink';

type NavigationProps = {
    links: any[]
}
const Navigation = (props: NavigationProps) => {
    const [state, setState] = useState({

    });
    
    const items = [];

    for (const [index, item] of props.links.entries()) {
        items.push(<li key={index}><NavLink url={item.url} icon={item.icon} altLabel={item.altLabel}/></li>);
    }

    return <nav className="max-h-screen min-h-screen bg-purple-dark justify-center flex rounded-3xl p-20">
        <ul className="space-y-10">
            {items}
        </ul>
    </nav>

}

export default Navigation;