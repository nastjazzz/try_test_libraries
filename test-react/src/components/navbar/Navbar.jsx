import {Link} from 'react-router-dom'

import './Navbar.css';

const Navbar = () => {
    return (
        <ul className="list">
            <li>
                <Link data-testid="home-link" to='/'>Home</Link>
            </li>
            <li>
                <Link data-testid="main-link" to='/main'>Main</Link>
            </li>
            <li>
                <Link data-testid="about-link" to='/about'>About</Link>
            </li>
            <li>
                <Link data-testid="users-link" to='/users'>Users</Link>
            </li>
        </ul>
    )
}

export default Navbar;