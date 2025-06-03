import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../Context";
import "./LoginView.css";

function LoginView() {
    const navigate = useNavigate();
    const { setEmail } = useStoreContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(e.target[0].value);
        navigate("/movies/genres/28");
    };

    return (
        <div>
            <Header />
            <div id="lForm">
                <h1 id="lTitle">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input id="email" type="email" className="input" name="email" placeholder="Email" autoComplete="on" required />
                    <input id="password" type="password" className="input" name="password" placeholder="Password" required />
                    <input id="loginButton" type="submit" value="Login" />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default LoginView;