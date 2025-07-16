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

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          label="Nome do Time"
          placeholder="Digite o nome do seu time"
        />
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Imagem" placeholder="Envie o endereço da imagem" />
        <Lista label="Posição" itens={posicoes} />
      </form>
    </section>
  );
};

export default Formulario;
