import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  id: [],
  removeFavorite: (id) => {},
  addFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteId, setFavoriteId] = useState([]);

  function addFavorite(id) {
    setFavoriteId((prevId) => [...prevId, id]);
  }

  function removeFavorite(id) {
    setFavoriteId((prevId) => {
      return prevId.filter((mealid) => mealid !== id);
    });
  }

  const value = {
    id: favoriteId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
