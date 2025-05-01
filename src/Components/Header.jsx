import './style.css'
import { useNavigate } from "react-router-dom"
import { useStoreContext } from "../Context";

function Header() {
    const navigate = useNavigate();
    const { setLogged, logged, fName, setSearch } = useStoreContext();

    function debounce(func, delay) {
        let timer = 0;

        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay)
        }
    }

    const handleSearch = debounce((e) => {
        setSearch(e);
        navigate("/movies/search");
    }, 400);

    const searchThing =(e)=>{
        handleSearch(e.target.value)
    };

    return (
        <div id="header">
            <h1 className="title">Jeffrey's Movies</h1>
            {logged ?
                <>
                    <h1 className="title">{`Hi ${fName}!`}</h1>
                    <button className="headerButtons" onClick={() => navigate("/movies/cart")}>Cart</button>
                    <button className="headerButtons" onClick={() => navigate("/movies/settings")}>Settings</button>
                    <button className="headerButtons" onClick={() => { setLogged(false); navigate("/"); }}>Logout</button><br />
                    <input type="text" id="searchBar" placeholder="Search Movies Here" onInput={searchThing} />
                </> : <>
                    <button className="headerButtons" onClick={() => navigate('/login')}>Login</button>
                    <button className="headerButtons" onClick={() => navigate('/register')}>Register</button>
                </>
            }
        </div>
    )
}

export default Header;