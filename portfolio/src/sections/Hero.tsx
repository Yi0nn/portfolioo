import "./Hero.css"
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero-left">
                <h1 className="hero-tittle">
                    Stefhania <br /> Noguera
                </h1>

                <p className="hero-description">
                    Hi! My name is Stefhania... yes, with fh,you can call me Yion too, I’m currently close to graduating, and by June 2026 I’ll finally have my degree, I love frontend development and creating my own designs, I enjoy making everything tell a story and convey a feeling. Anyway, this is my portfolio (hope you enjoy it)
                </p>
            </div>

            <div className="hero-right">
                <img
                    src={profileImage}
                    alt="Stefhania"
                    className="hero-image"
                    />
                <p className="hero-tag">Frontend Developer – UI/UX</p> 
            </div>
        </section>
    );
};

export default Hero;