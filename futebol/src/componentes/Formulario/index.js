import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import Lista from "../Lista";
import "./Formulario.css";

const Formulario = () => {
  const posicoes = [
    "Goleiro",
    "Lateral Direito",
    "Zagueiro",
    "Lateral Esquerdo",
    "Volante",
    "Meia",
    "Meia Ofensivo",
    "Meia Defensivo",
    "Ponta Direita",
    "Ponta Esquerda",
    "Atacante",
    "Centroavante",
    "Reserva",
  ];

  /*Função para a pagina não recarregar quando submeter o formulario*/
  const aoSalvar = (evento) => {
    evento.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome do Time"
          placeholder="Digite o nome do seu time"
        />
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto label="Imagem" placeholder="Envie o endereço da imagem" />
        <Lista label="Posição" itens={posicoes} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
