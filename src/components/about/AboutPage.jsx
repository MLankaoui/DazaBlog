import Header from "../header/Header.jsx";
import image from "../../assets/images/marouanee.jpg"


const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="py-5">
                <div className="container mt-5 d-flex flex-wrap align-items-center justify-content-between">
                    <div className="mb-4">
                        <h1 className="fw-bold text-success display-4 mb-4">
                            About Me
                        </h1>
                        <p className="fs-5" style={{maxWidth: "600px"}}>
                            Hi, I’m <span className="fw-bold text-success">Marouane</span>, a passionate learner and
                            aspiring developer currently pursuing a
                            bachelor’s degree in Business Administration. With a background in physics and chemistry,
                            I’ve transitioned into the world of technology, blending logical problem-solving with
                            creativity to explore web development and programming.
                            <br/><br/>
                            I’ve been exploring coding for over a year, gaining experience with Python, Django, and a
                            touch
                            of Flutter for mobile development. Now, I’m sharpening my skills in React while building
                            projects that challenge and inspire me.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            alt="Marouane"
                            className="rounded-circle border border-4 border-success"
                            src={image}
                            style={{maxWidth: "300px", height: "auto"}}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;