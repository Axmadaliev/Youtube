import { useEffect } from "react"
import { NavLink,Link} from "react-router-dom"
import "./Navbar.scss"
function Navbar() {
    const activeClassName = "nav__item__link nav__item__link--active"
    const inActiveClassName = "nav__item__link"

    const checkIsActive = (props) => props.isActive ? activeClassName : inActiveClassName
    return <header className="navbar container">
        <Link to="/" className="navbar__logo"> LOGO</Link>
        
        <ul className="nav">
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/home">Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/contacts">Contacts</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/about">About</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/blog">Blog</NavLink>
            </li>
        </ul>
    </header>
}

export default Navbar


