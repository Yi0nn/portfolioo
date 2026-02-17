import "./Footer.css";
import logo from "../assets/Yiondev.png";

const Footer = () => {
    return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="footer-content">
        <div className="footer-left">
            <img
                src={logo}
                alt="Yion Dev logo"
                className="footer-logo-image"
            />
        </div>

        <div className="footer-links">
            <div className="footer-column">
                <p>About me</p>
                <p>Portfolio</p>
                <p>Contact me</p>
            </div>

            <div className="footer-column">
                <p>CV</p>
                <p>GitHub</p>
                <p>Figma</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;