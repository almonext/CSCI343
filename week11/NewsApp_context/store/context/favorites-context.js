import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removedFavorites: (id) => {},
});

export default function FavoritesContextProvider({children}){
    const [FavoriteIds, setFavoriteIds] = useState([]);

    function addFavorite(id){
        setFavoriteIds((currentFavIds)=> {
            return [...currentFavIds, id];
        });
    }

    function removeFavorite(id){
        setFavoriteIds((currentFavIds) => {
            return currentFavIds.filter((favId) => favId !== id);
        });
    }

    const value = {
       ids: FavoriteIds,
       addFavorite: addFavorite,
       removeFavorite: removeFavorite
    }

    return (
    <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}