import './style.css'
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate();

    return (
        <div id="header">
            <h1 id="title">Jeffrey's Movies</h1>
            <button className="headerButtons" onClick={() => navigate('/login')}>Login</button>
            <button className="headerButtons" onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}

export default Header