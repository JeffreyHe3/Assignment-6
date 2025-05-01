import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState(Map());
    const [genreList, setgenreList] = useState([]);
    genreList = [
        {
            "genre": "Action", "id": 28, "favourite": false
        },
        {
            "genre": "Adventure", "id": 12, "favourite": false
        },
        {
            "genre": "Animation", "id": 16, "favourite": false
        },
        {
            "genre": "Crime", "id": 80, "favourite": false
        },
        {
            "genre": "Family", "id": 10751, "favourite": false
        },
        {
            "genre": "Fantasy", "id": 14, "favourite": false
        },
        {
            "genre": "History", "id": 36, "favourite": false
        },
        {
            "genre": "Horror", "id": 27, "favourite": false
        },
        {
            "genre": "Mystery", "id": 9648, "favourite": false
        },
        {
            "genre": "Sci-Fi", "id": 878, "favourite": false
        },
        {
            "genre": "War", "id": 10752, "favourite": false
        },
        {
            "genre": "Western", "id": 37, "favourite": false
        }
    ]

    return (
        <StoreContext.Provider value={{ fName, setFName, lName, setLName, email, setEmail, cart, setCart, logged, setLogged, genreList, setgenreList, search, setSearch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}