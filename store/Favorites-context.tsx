import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface FavoritesContextType {
  favoriteShowIds: number[];
  addFavoriteShow: (id: number) => void;
  removeFavoriteShow: (id: number) => void;
}

const FavoritesContext = createContext({} as FavoritesContextType);

function FavoritesContextProvider(props: PropsWithChildren) {
  const [favoriteShowIds, setFavoriteShowIds] = useState<number[]>([]);

  const addFavoriteShow = (id: number) => {
    setFavoriteShowIds((prev) => [...prev, id]);
  };

  const removeFavoriteShow = (id: number) => {
    setFavoriteShowIds((prev) => prev.filter((showId) => showId !== id));
  };
  return (
    <FavoritesContext.Provider
      value={{
        favoriteShowIds: favoriteShowIds,
        addFavoriteShow: addFavoriteShow,
        removeFavoriteShow: removeFavoriteShow,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}

export const useFavoriteList = () => useContext(FavoritesContext);
export default FavoritesContextProvider;
