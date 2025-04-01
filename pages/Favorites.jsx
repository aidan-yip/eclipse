import "./favorites.css";
import Movies from "../components/Movies";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect } from "react";

function Favorites() {
  const { favorites, loadFavsFromLocalStorage } = useContext(GlobalContext);

  useEffect(() => {
    loadFavsFromLocalStorage();
  }, [loadFavsFromLocalStorage]);

  return (
    <div className="favorite-page">
      {favorites.length === 0 && <p className="no-fav-text">You do not have any favorite movies.</p>}
      <Movies title="Favorite Movies" movies={favorites} />
    </div>
  );
}

export default Favorites;
