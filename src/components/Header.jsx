import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriver } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Header = () => {
    return <>
        <ul className="flex justify-around flex-wrap p-5 bg-slate-800 text-lime-900 font-bold">
            <li>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} className="mr-2"/> Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    <FontAwesomeIcon icon={faQuestion} className="mr-2"/>About me
                </Link>
            </li>
            <li> <FontAwesomeIcon icon={faScrewdriver} className="mr-2"/>Projects</li>
            <li> <FontAwesomeIcon icon={faAddressBook} className="mr-2"/> Contact</li>
        </ul>
    </>
}

export default Header;