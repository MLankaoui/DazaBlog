import { useTypewriter, Cursor } from 'react-simple-typewriter'
import heroImage from '../../assets/images/guyonacomputer.png'

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Marouane Lankaoui.', '19 years old.', 'BA student.', 'Self-taught web developer.'],
        loop: true,
    });
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Text Content */}
                <div className="col-12 col-md-6 mt-5 text-center text-md-start">
                    <h1 className="fw-bold text-success display-4">Marouane Lankaoui</h1>
                    <p className="text-white">
                        {text}
                        <Cursor />                         
                    </p>
                </div>
                {/* Image Content */}
                <div className="col-12 col-md-6 position-relative d-flex justify-content-center">
                    <div className="background-circle"></div>
                    <img alt="Hero" className="position-relative hero-image" src={heroImage}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;