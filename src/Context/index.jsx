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
    const [fGenre, setFGenre] = useState([]);

    return (
        <StoreContext.Provider value={{ fName, setFName, lName, setLName, email, setEmail, cart, setCart, logged, setLogged, fGenre, setFGenre, search, setSearch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}