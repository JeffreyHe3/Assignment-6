import './style.css'
import { useNavigate } from "react-router-dom"
import { useStoreContext } from "../Context";

function Header() {
    const navigate = useNavigate();
    const { setLogged, logged, fName, setSearch } = useStoreContext();

    // function debounce(func, delay) {
    //     let timer;

    //     return function (...args) {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             func(...args);
    //         }, delay)
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target[0].value);
    //     debounce(() => {navigate('/movies/search');}, 400);
    // }

    return (
        <div id="header">
            <h1 className="title">Jeffrey's Movies</h1>
            {!logged && <button className="headerButtons" onClick={() => navigate('/login')}>Login</button>}
            {!logged && <button className="headerButtons" onClick={() => navigate('/register')}>Register</button>}
            {logged && <h1 className="title">{`Hi ${fName}!`}</h1>}
            {logged && <button className="headerButtons" onClick={() => navigate("/movies/cart")}>Cart</button>}
            {logged && <button className="headerButtons" onClick={() => navigate("/movies/settings")}>Settings</button>}
            {logged && <button className="headerButtons" onClick={() => { setLogged(false); navigate("/"); }}>Logout</button>}<br />
            {/* {logged &&
                <form onSubmit={handleSubmit}>
                    <input type="text" id="searchBar" placeholder="Search Movies Here" />
                </form>
            } */}
        </div>
    )
}

export default Header;