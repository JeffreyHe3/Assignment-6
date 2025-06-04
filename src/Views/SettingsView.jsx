import "./SettingsView.css";
import { useState } from "react";
import { useStoreContext } from "../Context";
import { useNavigate } from "react-router-dom"

function SettingsView() {
    const { email, lName, fName, setFName, setLName, genres, setGenres } = useStoreContext();
    const [saved, setSaved] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkboxes = e.target.querySelectorAll('input[type="checkbox"]');
        const checkedIds = new Set();

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedIds.add(checkbox.id);
            }
        });

        if (checkedIds.size < 5) {
            alert("Please select at least 5 favorite genres.");
            return;
        }

        const newGenres = genres.map(genre => ({ ...genre, isChosen: checkedIds.has(genre.id) }));

        setFName(e.target[0].value);
        setLName(e.target[1].value);
        setGenres(newGenres);
        setSaved(true);
    };

    return (
        <div id="settingsPage">
            <button className="button" onClick={() => navigate(-1)}>Back</button>
            <form id="settingForms" onSubmit={handleSubmit}>
                <h1>Settings</h1>
                <h1 htmlFor="inputFName" className="settingsLabel">First Name:</h1>
                <input id="inputFName" className="settingsInput" type="text" defaultValue={fName} required></input>
                <h1 htmlFor="inputLName" className="settingsLabel">Last Name:</h1>
                <input id="inputLName" className="settingsInput" type="text" defaultValue={lName} required></input>
                <h1>{`Email: ${email}`}</h1>
                <h1>Viewable Genres:</h1>
                {genres && genres.map(genre => (
                    <div key={genre.id}>
                        <input id={genre.id} type="checkbox" defaultChecked={genre.isChosen}></input>
                        <label className="genreLabels" htmlFor={genre.id}>{genre.genre}</label>
                    </div>
                ))}
                <input className="button" type="submit" value="Save Account Details" />
                {saved && <p id="savedText">Saved!</p>}
            </form>
        </div>

    )
}

export default SettingsView;