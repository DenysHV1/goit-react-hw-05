import { NavLink, Outlet } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const setActive = ({ isActive }) =>
    isActive ? css.activeLink : css.noActiveLink;

  return (
    <>
      <header className={css.header}>
        <div className="container">
          <nav>
            <ul className={css.navList}>
              <li>
                <NavLink to={"/"} className={setActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/movies"} className={setActive}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Navigation;
