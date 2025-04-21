import "./SettingsView.css";
import { useStoreContext } from "../Context";

function SettingsView() {
    const { email, lName, fName, setEmail, setFName, setLName, fGenre, setFGenre } = useStoreContext();

    return (
        <div>
            <form>
                <h1>{`First name: ${fName}`}</h1>
                <button>Change First Name</button>
                <h1>{`Last name: ${lName}`}</h1>
                <button>Change Last Name</button>
                <h1>{`Email: ${email}`}</h1>
            </form>
        </div>
    )
}

export default SettingsView;