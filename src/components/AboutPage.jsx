import Header from "./Header.jsx";
import image from "./images/marouane.jpg"


const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="p-9 bg-slate-800">
                <div className="mt-[240px] flex flex-wrap items-center justify-around">
                    <div className="">
                        <h1 className="font-bold text-lime-900 text-5xl mb-5">
                            About me
                        </h1>
                        <p className="w-96 text-gray-600">Hi, I’m <span className="font-bold text-lime-900">Marouane</span>, a passionate learner and aspiring developer currently pursuing a bachelor’s
                            degree in Business Administration. With a background in physics and chemistry, I’ve transitioned
                            into the world of technology, blending logical problem-solving with creativity to explore web
                            development and programming.

                            I’ve been exploring coding for over a year, gaining experience with Python, Django, and a touch
                            of Flutter for mobile development. Now, I’m sharpening my skills in React while building
                            projects that challenge and inspire me.</p>
                    </div>

                    <div>
                        <img alt="Marouane" className="border-[8px] border-lime-900 rounded-full" src={image}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;