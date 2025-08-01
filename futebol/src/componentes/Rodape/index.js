import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <p>Desenvolvido por Alex Majdalani</p>
      <div className="redes">
        <a
          href="https://github.com/Alex-Majdalani"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            style={{ color: "#fff" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alex-melo-a3b14b1a6/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            style={{ color: "#fff" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Rodape;
