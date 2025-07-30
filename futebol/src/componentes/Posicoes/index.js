import Jogadores from "../Jogadores";
import "./Posicoes.css";

const Posicoes = (props) => {
  const corPrimaria = { borderColor: props.corPrimaria };
  const corSecundaria = { backgroundColor: props.corSecundaria };

  return (
    <section className="posicao" style={corSecundaria}>
      <h3 style={corPrimaria}>{props.nome}</h3>
      {props.jogadores.map((jogadores) => (
        <Jogadores nome={jogadores.nome} origem={jogadores.origem} />
      ))}
    </section>
  );
};

export default Posicoes;
