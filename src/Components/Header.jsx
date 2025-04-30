import './style.css'
import { useNavigate } from "react-router-dom"
import { useStoreContext } from "../Context";

function Header() {
    const navigate = useNavigate();
    const { setLogged, logged, fName, setSearch } = useStoreContext();

    function debounce(func, delay) {
        let timer;

        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay)
        }
    }

    const handleSearch(e) = debounce(() => {
        setSearch(e);
        navigate('/movies/search');
    }, 400);

    return (
        <div id="header">
            <h1 className="title">Jeffrey's Movies</h1>
            {logged ?
                <>
                    <h1 className="title">{`Hi ${fName}!`}</h1>
                    <button className="headerButtons" onClick={() => navigate("/movies/cart")}>Cart</button>
                    <button className="headerButtons" onClick={() => navigate("/movies/settings")}>Settings</button>
                    <button className="headerButtons" onClick={() => { setLogged(false); navigate("/"); }}>Logout</button><br />
                    <input type="text" id="searchBar" placeholder="Search Movies Here" onInput={(e) => handleSearch(e)}/>
                </> : <>
                    <button className="headerButtons" onClick={() => navigate('/login')}>Login</button>
                    <button className="headerButtons" onClick={() => navigate('/register')}>Register</button>
                </>
            }
        </div>
    )
}

export default Header;