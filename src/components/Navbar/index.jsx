import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function Navbar() {
return (
<div>
    <nav className="mainNav">
        <ul className="mainNav__lista">
            <div className="logo">
                <li>
                    <a className="brand" href="">KHP Shop</a>
                </li>
            </div>
            <li className="mainNav__item">
                <a className="mainNav__link" href="">Inicio</a>
            </li>
            <li className="mainNav__item">
                <a className="mainNav__link" href="">Galeria</a>
            </li>
            <li className="mainNav__item">
                <a className="mainNav__link" href="">Contacto</a>
            </li>
            <li className="mainNav__item">
                <a className="mainNav__link" href="">carrito</a>
            </li>
        </ul>
    </nav>
</div> 
)
}

export default Navbar;