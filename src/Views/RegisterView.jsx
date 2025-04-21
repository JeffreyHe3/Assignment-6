import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useStoreContext } from "../Context";
import "./RegisterView.css";

function RegisterView() {
    const { setEmail, setLogged, setFName, setLName } = useStoreContext();
    const navigate = useNavigate();
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (p1 === p2) {
            navigate('/movies/genres/28');
            setFName(e.target[0].value);
            setLName(e.target[1].value);
            setEmail(e.target[2].value);
            setLogged(true);
        } else {
            alert("An error has occured");
        }
    };

    return (
        <div>
            <Header />
            <div id="rForm" >
                <h1 id="rTitle">Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="inputLabel">First Name</label>
                    <input id="firstName" type="text" className="input" name="firstName" required />
                    <label htmlFor="lastName" className="inputLabel">Last Name</label>
                    <input id="lastName" type="text" className="input" name="lastName" required />
                    <label htmlFor="email" className="inputLabel">Email</label>
                    <input id="email" type="email" className="input" name="email" autoComplete="on" required />
                    <label htmlFor="1Password" className="inputLabel">Password</label>
                    <input id="1Password" type="password" className="input" name="1Password" onChange={event => { setP1(Number(event.target.value)) }} required />
                    <label htmlFor="2Password" className="inputLabel">Re-enter Password</label>
                    <input id="2Password" type="password" className="input" name="2Password" onChange={event => { setP2(Number(event.target.value)) }} required />
                    <input type="submit" value="Register" /><br />
                    <label>Choose at least 5 of your favourite genres</label><br />
                    <input type="checkbox"></input> 
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterView;