import { Link, useLocation } from 'react-router-dom';
import './Navbar.module.css';

export function Navbar() {
    const location = useLocation();

    return (
        <nav className="menu-nav">

            <div className="logo">
                <Link to="/" style={{
                    color: location.pathname === '/' ? '#fff' : '#aaa',
                    textDecoration: 'none',
                    fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                    transition: 'color 0.2s'
                }}>
                    Explorar
                </Link>
            </div>

            <ul className="nav-links">
                <li>
                    
                </li>
                <li>

                </li>
            </ul>

        </nav>
    );
}
