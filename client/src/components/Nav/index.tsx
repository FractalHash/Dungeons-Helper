
import { NavLink } from "react-router-dom"
import "./Nav.scss"

const Nav = () => {

  return (
    <header>
      <nav className="nav">
        <NavLink to={"/"}>
          <div className="nav__logo" />
        </NavLink>  
        <ul className="nav__list">
          <NavLink to={"/login"}>
            <li className="nav__link">
              Login
            </li>
          </NavLink>
          <NavLink to={"/characters"}>
            <li className="nav__link">
              Characters
            </li>
          </NavLink>
          <NavLink to={"/dungeons"}>
            <li className="nav__link">
              Dungeons
            </li>
          </NavLink>  
        </ul>
      </nav>
    </header>
  )
}


export default Nav