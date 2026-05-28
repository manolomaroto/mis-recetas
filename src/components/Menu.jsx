import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to="/" end>Inicio</NavLink></li>
                <li><NavLink to="/favoritos">Favoritos</NavLink></li>
            </ul>
        </nav>      
    )
}

export default Menu;