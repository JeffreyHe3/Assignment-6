import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../Context";
import "./RegisterView.css";

function RegisterView() {
    const { setEmail, setFName, setLName, genres, setGenres } = useStoreContext();
    const [checkedGenres, setCheckedGenres] = useState([]);
    const navigate = useNavigate();
    
    const handleChecked = (e) => {
        const updatedGenres = genres.map(genre =>
            genre.id === e.target.id ? { ...genre, isChosen: e.target.checked } : genre
        );

        setCheckedGenres(prev =>
            e.target.checked ? [...prev, e.target.id] : prev.filter(gid => gid !== e.target.id)
        );

        setGenres(updatedGenres);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target[3].value !== e.target[4].value) {
            alert("Passwords do not match.");
            return;
        }

        if (checkedGenres.length < 5) {
            alert("Please select at least 5 favorite genres.");
            return;
        }

        setFName(e.target[0].value);
        setLName(e.target[1].value);
        setEmail(e.target[2].value);
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
                    <input id="password1" type="password" className="input" name="password1" placeholder="Password" required />
                    <input id="password2" type="password" className="input" name="password2" placeholder="Re-enter Password" required />
                    <p id="genresTitle">Choose at least 5 genres you want to see</p>
                    {genres && genres.map(genre => (
                        <div key={genre.id}>
                            <input id={genre.id} type="checkbox" onChange={handleChecked}></input>
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