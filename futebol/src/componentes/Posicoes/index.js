import Jogadores from "../Jogadores";
import "./Posicoes.css";

const Posicoes = (props) => {
  const corPrimaria = { borderColor: props.corPrimaria };
  const corSecundaria = { backgroundColor: props.corSecundaria };

  return (
    props.jogadores.length > 0 && (
      <section className="posicao" style={corSecundaria}>
        <h3 style={corPrimaria}>{props.nome}</h3>
        <div className="jogadores">
          {props.jogadores.map((jogador) => (
            <Jogadores
              nome={jogador.nome}
              origem={jogador.origem}
              imagem={jogador.imagem}
              key={jogador.nome}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Posicoes;
