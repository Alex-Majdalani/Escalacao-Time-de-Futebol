import "./Lista.css";

const Lista = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <select className="campo-texto">
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Lista;
