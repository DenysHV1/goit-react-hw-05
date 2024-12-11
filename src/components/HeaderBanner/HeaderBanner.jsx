import css from "./HeaderBanner.module.css";

import bannerBg from "./background.jpg";
import bannerVideo from "./Titanic.mp4";
import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <div className={css.headerBanner}>
      <div>
        <p>REACT CINEMA</p>
        <p>
          Subheading that sets up context, shares more info about the website,
          or generally gets people psyched to keep scrolling.{" "}
        </p>
        <div>
          <Link to="movies">Movies</Link>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <img src={bannerBg} alt="banner background" />
    </div>
  );
};

export default HeaderBanner;
