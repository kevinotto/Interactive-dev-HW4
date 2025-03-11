import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const Portfolio = () => {
    return (
        <div>
            <Header />
            <aside className="gif-container">
                <img src="/Project images/skeleton plant music.gif" alt="Animated GIF" className="gif" />
            </aside>
            <About />
            <Projects />
            <Footer />
        </div>
    );

};

export default Portfolio;