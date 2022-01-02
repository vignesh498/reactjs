import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContex from "../../store/favorites-context";
function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContex);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/NewMeetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/Favourite">My Favorites</Link>
            <span className={classes.badge}>
              {favouritesCtx.totalFavorites}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
