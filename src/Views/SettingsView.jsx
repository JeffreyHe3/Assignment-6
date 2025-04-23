import "./SettingsView.css";
import { useStoreContext } from "../Context";

function SettingsView() {
    const { email, lName, fName, setEmail, setFName, setLName, fGenre, setFGenre } = useStoreContext();
    const genreList = [
        {
            "genre": "Action", "id": 28
        },
        {
            "genre": "Adventure", "id": 12
        },
        {
            "genre": "Animation", "id": 16
        },
        {
            "genre": "Crime", "id": 80
        },
        {
            "genre": "Family", "id": 10751
        },
        {
            "genre": "Fantasy", "id": 14
        },
        {
            "genre": "History", "id": 36
        },
        {
            "genre": "Horror", "id": 27
        },
        {
            "genre": "Mystery", "id": 9648
        },
        {
            "genre": "Sci-Fi", "id": 878
        },
        {
            "genre": "War", "id": 10752
        },
        {
            "genre": "Western", "id": 37
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
            
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>First Name:</h1>
                <input type="text" placeholder={`First name: ${fName}`}></input>
                <button>Change First Name</button>
                <h1>Last Name:</h1>
                <input type="text" placeholder={`Last name: ${lName}`}></input>
                <button>Change Last Name</button>
                <h1>{`Email: ${email}`}</h1>
                {genreList && genreList.map(genre => (
                    <div key={genre.id}>
                        <label>{genre.genre}</label>
                        <input type="checkbox"></input>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default SettingsView;