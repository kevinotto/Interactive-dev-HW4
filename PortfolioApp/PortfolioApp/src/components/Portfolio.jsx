import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";

const Portfolio = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.log("Autoplay not working:", error);
          });
        }
      }, []);

    const toggleMusic = () => { 
        if (!audioRef.current) return;

        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };
    
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Footer />

            <aside className="gif-container">
                <img src="/Project images/skeleton plant music.gif" alt="Animated GIF" className="gif" />
            </aside>

            <aside className="song-name">
                <h3>Omeaga</h3>
                <h3>The Sound of Euphoria</h3>
            </aside>

           <audio ref={audioRef} autoPlay loop>
                <source src="/Audio/Omeaga - The Sound of Euphoria (Official Audio).mp3" type="audio/mpeg" />
            </audio>

            <button onClick={toggleMusic} className="music-button">
                {isPlaying ? "Pause music" : "Play music"}
            </button>

        </div>
    );

};

export default Portfolio;