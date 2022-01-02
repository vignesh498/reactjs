import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCtx.itemIsFavorite(props.id);

  function toggleFavouritesStatusHandler(){
    if(itemIsFavourite)
    {
      favouritesCtx.removeFavorite(props.id);
    }else{
      favouritesCtx.addFavorite({
        id:props.id,
        title:props.title,
        description: props.description,
        image: props.image,
        address:props.address
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritesStatusHandler}>{itemIsFavourite?'Remove from favourite':'Add to favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
