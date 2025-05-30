import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../Context";
import "./RegisterView.css";

function RegisterView() {
    const { setEmail, setFName, setLName, genreList, setFGenre } = useStoreContext();
    const [checkedGenres, setcheckedGenres] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const password1 = e.target[3].value;
        const password2 = e.target[4].value;
        const checkboxes = e.target.querySelectorAll('input[type="checkbox"]');

        if (password1 !== password2) {
            alert("Passwords do not match.");
            return;
        }

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedGenres.push(checkbox.id);
            }
        });

        if (checkedGenres.length < 5) {
            alert("Please select at least 5 favorite genres.");
            return;
        }

        const fName = e.target[0].value;
        const lName = e.target[1].value;
        const email = e.target[2].value;
        setFName(fName);
        setLName(lName);
        setEmail(email);
        setFGenre(checkedGenres);

        navigate(`/movies/genres/${checkedGenres[0]}`);
    };


    return (
        <div>
            <Header />
            <div id="rForm" >
                <h1 id="rTitle">Register</h1>
                <form onSubmit={handleSubmit}>
                    <input id="firstName" type="text" className="input" name="firstName" placeholder="First Name" required />
                    <input id="lastName" type="text" className="input" name="lastName" placeholder="Last Name" required />
                    <input id="email" type="email" className="input" name="email" autoComplete="on" placeholder="Email" required />
                    <input id="1Password" type="password" className="input" name="1Password" placeholder="Password" required />
                    <input id="2Password" type="password" className="input" name="2Password" placeholder="Re-enter Password" required />
                    <p id="genreListTitle">Choose at least 5 of your favourite genres</p>
                    {genreList && genreList.map(genre => (
                        <div key={genre.id}>
                            <input id={genre.id} type="checkbox"></input>
                            <label htmlFor={genre.id} className="inputLabel">{genre.genre}</label>
                        </div>
                    ))}
                    <input id="submitButton" type="submit" value="Register" />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterView;