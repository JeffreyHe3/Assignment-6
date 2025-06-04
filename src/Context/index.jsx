import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [cart, setCart] = useState(Map());
    const [genres, setGenres] = useState([
        { "genre": "Action", "id": "28", "isChosen": false },
        { "genre": "Adventure", "id": "12", "isChosen": false },
        { "genre": "Animation", "id": "16", "isChosen": false },
        { "genre": "Crime", "id": "80", "isChosen": false },
        { "genre": "Family", "id": "10751", "isChosen": false },
        { "genre": "Fantasy", "id": "14", "isChosen": false },
        { "genre": "History", "id": "36", "isChosen": false },
        { "genre": "Horror", "id": "27", "isChosen": false },
        { "genre": "Mystery", "id": "9648", "isChosen": false },
        { "genre": "Sci-Fi", "id": "878", "isChosen": false },
        { "genre": "War", "id": "10752", "isChosen": false },
        { "genre": "Western", "id": "37", "isChosen": false }
    ]);

    return (
        <StoreContext.Provider value={{ fName, setFName, lName, setLName, email, setEmail, cart, setCart, genres, setGenres }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}