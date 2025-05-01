import "./SettingsView.css";
import { useStoreContext } from "../Context";

function SettingsView() {
    const { email, lName, fName, fGenre, setFName, setLName, setgenreList, genreList } = useStoreContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFName(e.target[0].value);
        setLName(e.target[1].value);

        // if (.checked){
        // setgenreList();
        // } else {
        // setgenreList(.delete(.id));
        // }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>First Name:</h1>
                <input id="inputFName" type="text" placeholder={fName}></input>
                <h1>Last Name:</h1>
                <input id="inputLName" type="text" placeholder={lName}></input>
                <h1>{`Email: ${email}`}</h1>
                <h1>Favourite Genres:</h1>
                {genreList && genreList.map(genre => (
                    <div key={genre.id}>
                        <input id={genre.id} type="checkbox" checked={fGenre.includes(genre.id)}></input>
                        <label className="genreLabels" htmlFor={genre.id} >{genre.genre}</label>
                    </div>
                ))}
                <input id="settingsSubmit" type="submit" value="Change Account Details" />
            </form>
        </div>
    )
}

export default SettingsView;