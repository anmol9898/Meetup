import { useContext } from "react";
import MeetupList from "../Components/Meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage(props) {
  const FavouritesCtx = useContext(FavouritesContext);

  let content;
  if (FavouritesCtx.totalFavourites === 0) {
    content = <p>You got no favourites. Please add some!!</p>;
  } else {
    content = <MeetupList meetups={FavouritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;
