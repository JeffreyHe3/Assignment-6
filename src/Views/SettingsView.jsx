import "./SettingsView.css";
import { useState } from "react";
import { useStoreContext } from "../Context";
import { useNavigate } from "react-router-dom"

function SettingsView() {
    const { email, lName, fName, setFName, setLName, genreList, setFGenre, fGenre } = useStoreContext();
    const [saved, setSaved] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFName(e.target[0].value);
        setLName(e.target[1].value);
        const checkedGenres = [];
        const checkboxes = e.target.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedGenres.push(Number(checkbox.id));
            }
        });

        if (checkedGenres.length < 5) {
            alert("Please select at least 5 favorite genres.");
            return;
        }
        
        setFGenre(checkedGenres);

        setSaved(true);
    };

    return (
        <div id="settingsPage">
            <button className="button" onClick={() => navigate(-1)}>Back</button>
            <form id="settingForms" onSubmit={handleSubmit}>
                <h1>Settings</h1>
                <h1>First Name:</h1>
                <input id="inputFName" className="settingsInput" type="text" defaultValue={fName}></input>
                <h1>Last Name:</h1>
                <input id="inputLName" className="settingsInput" type="text" defaultValue={lName}></input>
                <h1>{`Email: ${email}`}</h1>
                <h1>Favourite Genres:</h1>
                {genreList && genreList.map(genre => (
                    <div key={genre.id}>
                        <input id={genre.id} type="checkbox" defaultChecked={fGenre.includes(genre.id)}></input>
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