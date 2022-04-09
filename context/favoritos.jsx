import { createContext, useState } from "react";

const favoritoContext = createContext(null);

const ContextFavoritoProvider = ({children}) => {
    const [favorito, setFavorito] = useState(false);


    const toggleFavorite = (id) => {
        let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if(favorites.includes(id)) {
            favorites = favorites.filter(title => title !== id)
            setFavorito(false)
        } else {
            favorites.push(id)
            setFavorito(true)
        }
        
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    
    const existeEnFavorites = (id) => {
    
        if(typeof window === "undefined") return false
    
        let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        
        return favorites.includes(id)
    }

    const data = {favorito, existeEnFavorites, toggleFavorite}

    return (
        <favoritoContext.Provider value={data}>
            {children}
        </favoritoContext.Provider>
    )
}

export default favoritoContext
export {ContextFavoritoProvider}