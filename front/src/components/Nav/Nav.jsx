import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, PersonajeRandom, logOut }) => {

    return (
        <div>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => PersonajeRandom()}>Random</button>

            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Nav