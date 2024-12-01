import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriver } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Header = () => {
    return <div className="">
        <ul className="rounded-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 bg-lime-800 mt-5">
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
    </div>
}

export default Header;