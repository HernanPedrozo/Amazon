import Cartwidget from '../Cartwidget';
import './Navbar.css';


function Navbar() {
return (
<div>
    <nav className="mainNav">
        <ul className="mainNav__lista">
            <div className="logo">
                <i>
                    <button className="brand">KHP Shop</button>
                </i>
            </div>
            <li className="mainNav__item">
                <button className="mainNav__link">Inicio</button>
            </li>
            <li className="mainNav__item">
            <button className="mainNav__link">Galeria</button>
            </li>
            <li className="mainNav__item">
            <button className="mainNav__link">Contacto</button>
            </li>
            <li className="mainNav__item">
            <button className="mainNav__link">
                <Cartwidget/>
            </button>
            </li>
        </ul>
    </nav>
</div> 
)
}

export default Navbar;