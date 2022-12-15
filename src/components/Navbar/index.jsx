import Cartwidget from '../Cartwidget';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
return (
<div>
    <nav className="Navbar">
        <Link to='/'>Inicio</Link>
        <div className="Categories">
            <Link to='/category/samsung' className="Option">Samsung</Link>
            <Link to='/category/motorola' className="Option">Motorola</Link>
            <Link to='/category/xiaomi' className="Option">Xiaomi</Link>
        </div>
        <Cartwidget/>
    </nav>
</div> 
)
}

export default Navbar;