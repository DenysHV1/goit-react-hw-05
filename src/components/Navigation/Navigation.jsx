import { NavLink, Outlet } from "react-router-dom";
import css from './Navigation.module.css'

const Navigation = () => {

const setActive = ({isActive}) => isActive ? css.activeLink : css.noActiveLink;


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"} className={setActive}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"} className={setActive}>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
      <Outlet/>
      </main>
      <footer></footer>
    </>
  );
};

export default Navigation;
