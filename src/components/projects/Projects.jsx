import Header from "../header/Header.jsx";
import dazareact from '../../../public/dazareact.jpg';
import htmlportfolio from "../../../public/marouane.jpg"

const Projects = () => {
    const projects = [
        { title: 'React Portfolio', image: dazareact, link: 'https://daza-blog.vercel.app' },
        { title: 'Html Portfolio', image: htmlportfolio, link: 'https://marouanelankaoui.netlify.app' },

    ];

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center mb-4">My Projects</h1>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img src={project.image} className="card-img-top" height="200px" width="100%" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <a href={project.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                                        Visit Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
