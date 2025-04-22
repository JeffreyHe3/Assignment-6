import "./SettingsView.css";
import { useStoreContext } from "../Context";

function SettingsView() {
    const { email, lName, fName, setEmail, setFName, setLName, fGenre, setFGenre } = useStoreContext();
    
    const handleSubmit = (e) => {
        e.preventDefault();
            
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{`First name: ${fName}`}</h1>
                <input type="text" placeholder="Type in new first name here"></input>
                <button>Change First Name</button>
                <h1>{`Last name: ${lName}`}</h1>
                <input type="text" placeholder="Type in new last name here"></input>
                <button>Change Last Name</button>
                <h1>{`Email: ${email}`}</h1>
            </form>
        </div>
    )
}

export default SettingsView;