import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import Projects from "./components/projects/Projects.jsx";
import NotFound from "./components/notfound/NotFound.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);

    // Use useEffect to manage the spinner display timeout
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false); // Hide the spinner after 7 seconds
        }, 3000);

        // Cleanup timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {loading ? (
                <div id="spinner" className="container">
                    <div className="loading"></div>
                </div>
            ) : (
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            )}
        </div>
    );
}

export default App;
