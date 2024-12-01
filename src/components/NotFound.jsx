import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mt-[240px] text-8xl text-red-800 font-bold">404 Not Found</h1>
                <Link to="/">
                    <button className="border-[5px] border-lime-800 bg-lime-800 rounded-full mt-8 p-5 font-bold text-dark">GO BACK TO HOME PAGE</button>
                </Link>
            </div>
        </>
    )
}

export default NotFound