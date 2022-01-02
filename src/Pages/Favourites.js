import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../Components/meetups/MeetupList";
function FavouritesPage() {
  const favouriteCtx = useContext(FavoritesContext);
  let content;
  if (favouriteCtx.totalFavorites === 0) {
    content = <p>You have no favourites</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favorites}></MeetupList>;
  }
  return (
    <div>
      <h1>Favourites Page</h1>
      {content}
    </div>
  );
}
export default FavouritesPage;
