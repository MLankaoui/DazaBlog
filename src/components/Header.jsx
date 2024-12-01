import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriver } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Header = () => {
    return <>
        <ul className="rounded-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 bg-lime-800 mt-5 font-bold text-lg">
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
            <li>
                <Link to="/projects">
                    <FontAwesomeIcon icon={faScrewdriver} className="mr-2"/>Projects
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <FontAwesomeIcon icon={faAddressBook} className="mr-2"/> Contact
                </Link>
            </li>
        </ul>
    </>
}

export default Header;
