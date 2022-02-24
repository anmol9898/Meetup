import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavouritesContext from "../../store/favourites-context";
import { useContext } from "react";

function MeetupItem(props) {
  const FavouritesCtx = useContext(FavouritesContext);
  const isItemFavourite = FavouritesCtx.itemIsFavourite(props.id);
  function toggleFavouriteStatusHandler() {
    if (isItemFavourite) {
      FavouritesCtx.removeFavourite(props.id);
    } else {
      FavouritesCtx.addFavourite({
        //   ...props,
        id: props.id,
        image: props.image,
        description: props.description,
        title: props.title,
        address: props.address,
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
          <button onClick={toggleFavouriteStatusHandler}>
            {isItemFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
