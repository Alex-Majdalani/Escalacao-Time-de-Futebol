import "./Jogadores.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-regular-svg-icons";

const Jogadores = ({ nome, imagem, origem, corDeFundo }) => {
  const temImagem = imagem && imagem.trim() !== "";

  return (
    <div className="jogador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        {temImagem ? (
          <img src={imagem} alt={nome} />
        ) : (
          <div className="icone-wrapper">
            <FontAwesomeIcon icon={faFutbol} className="icone-futebol" />
          </div>
        )}
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{origem}</h5>
      </div>
    </div>
  );
};

export default Jogadores;
