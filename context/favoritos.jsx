import { createContext, useState } from "react";


const favoritoContext = createContext(null);

const ContextFavoritoProvider = ({children}) => {
    if(typeof window === "undefined") return false
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const [favorito, setFavorito] = useState(favorites);
    
    const toggleFavorite = (id) => {
        if(favorites.includes(id)) {
            favorites = favorites.filter(title => title !== id)
            setFavorito(favorites)
        } else {
            favorites.push(id)
            setFavorito([
                ...favorito,
                id
            ])
        }
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    
    const existeEnFavorites = (id) => favorito.includes(id)

    const data = {favorito, existeEnFavorites, toggleFavorite}

    return (
        <favoritoContext.Provider value={data}>
            {children}
        </favoritoContext.Provider>
    )
}

export default favoritoContext
export {ContextFavoritoProvider}