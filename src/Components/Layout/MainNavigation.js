import FavouritesContext from "../../store/favourites-context";
import { Link } from "react-router-dom";
// import "./MainNavigation.css"
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  const favouritesCount = favouritesCtx.totalFavourites;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My favourites</Link>
            <span className={classes.badge}>{favouritesCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
