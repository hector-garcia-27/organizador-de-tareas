import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className='nav'>
            <div>
                <NavLink to='/'>
                    <img src="..." className='nav-logo' alt="Logo" />
                </NavLink>
            </div>
            <div className='nav-buttons'>
                <NavLink to='/login'>
                    <h5 className='nav-login n-boton'>Login</h5>
                </NavLink>

                <NavLink to='/register'>
                    <h5 className='nav-registro n-boton'>Registrarse</h5>
                </NavLink>
                <NavLink to='/'>
                    <h5 className='nav-salir n-boton'>Salir</h5>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar