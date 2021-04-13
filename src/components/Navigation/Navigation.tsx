import { useState } from 'react';
import './Navigation.scss';
import NavLink from './NavLink/NavLink';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

    return <nav className="min-w-max max-w-max bg-primary rounded-3xl p-10 ">
        <div className="flex flex-col space-y-40 items-center">
            <div className="p-5 bg-light rounded-full">
                <RestaurantIcon fontSize="large" className="text-white"/>
            </div>
            <div>
                <ul className="space-y-10">
                    {items}
                </ul>
            </div>
            <div className="flex flex-col space-y-10">
                <a target="_blank" href="https://github.com/Nickelfront/zone-app"><HelpOutlineIcon className="text-light"/></a>
                <a href=""><ExitToAppIcon className="text-light"/></a>
            </div>
        </div>
    </nav>

}

export default Navigation;