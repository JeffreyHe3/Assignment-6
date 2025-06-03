import { useStoreContext } from "../Context";
import { useNavigate } from "react-router-dom"
import "./CartView.css";

function CartView() {
    const { cart, setCart } = useStoreContext();
    const navigate = useNavigate();

    const handleRemoveFromCart = (movie) => {
        const updatedCart = cart.set(movie.id, movie);
        setCart((prevCart) => prevCart.delete(movie.id, movie));
        const vanillaCart = updatedCart.toJS();
        const parseCart = JSON.stringify(vanillaCart);
        localStorage.removeItem(`${user.uid}-cart`, parseCart);

    };

    return (
        <div id="cartPage">
            <button className="button" onClick={() => navigate(-1)}>Back</button>
            <h1 id="cTitle">Cart</h1>
            <div className="cartContainer">
                {cart.entrySeq().map(([key, value]) => {
                    return (
                        <div className="cartItem" key={key}>
                            {value.poster_path && <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt={value.title} />}
                            <h3>{value.title}</h3>
                            <button className="removeButton" onClick={() => handleRemoveFromCart(movie)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CartView;