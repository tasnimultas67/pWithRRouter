
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='menu'>
            <NavLink to="/" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>About</NavLink>
            <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>Contact</NavLink>
            <NavLink to="/friends" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>Friends</NavLink>
            <NavLink to="/posts" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>Posts</NavLink>
        </nav>
    );
};

export default Header;