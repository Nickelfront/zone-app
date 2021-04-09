import './NavLink.scss';
import { NavLink as Link } from 'react-router-dom';

type NavLinkProps = {
    altLabel: string
    url: string
    icon: any
}
const NavLink = (props: NavLinkProps) => {

    return <Link 
            exact 
            activeClassName="text-purple bg-purple-light rounded-2xl"
            className="text-purple-light p-3" 
            aria-label={props.altLabel} 
            to={props.url}>{props.icon}</Link>
}

export default NavLink;