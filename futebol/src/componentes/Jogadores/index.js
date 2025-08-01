import "./Jogadores.css";

const Jogadores = ({ nome, imagem, origem }) => {
  return (
    <div className="jogador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{origem}</h5>
      </div>
    </div>
  );
};

export default Jogadores;
