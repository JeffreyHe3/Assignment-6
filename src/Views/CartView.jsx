import { useStoreContext } from "../Context";
import { useNavigate } from "react-router-dom"
import "./CartView.css";

function CartView() {
    const { cart, setCart } = useStoreContext();
    const navigate = useNavigate();

    const handleRemoveFromCart = (key) => {
        setCart((prevCart) => prevCart.delete(key));
    };

    return (
        <div id="cartPage">
            <button className="button" onClick={() => navigate(-1)}>Back</button>
            <h1 id="cTitle">Cart</h1>
            {cart.size == 0 ?
                <h1 id="emptyCart">Your cart is empty! Go buy some movies!</h1>
                :
                <div className="cartContainer">
                    {cart.entrySeq().map(([key, value]) => {
                        return (
                            <div className="cartItem" key={key}>
                                {value.poster_path && <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} onClick={() => navigate(`/movies/details/${key}`)} alt={`${value.title} poster`} />}
                                <h3>{value.title}</h3>
                                <button className="button" onClick={() => handleRemoveFromCart(key)}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default CartView;