import heroImage from './images/guyonacomputer.png'

const Hero = () => {
    return (
        <div className="bg-slate-800 p-20">
            <div className="flex flex-wrap justify-around mt-20">
                <div className="mt-20">
                    <h1 className="font-bold text-lime-900 text-5xl">Marouane Lankaoui</h1>
                    <p className="text-gray-400">
                        Business Administration student and an aspiring web developer.
                    </p>
                </div>
                <div className="relative">
                    <div className="rounded-full bg-lime-900 size-96 z-0"></div>
                    <div className="absolute bottom-0 left-0">
                        <img  alt="Hero" className="h-full ml-12 z-10" src={heroImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;