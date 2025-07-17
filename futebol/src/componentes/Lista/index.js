import "./Lista.css";

const Lista = (props) => {
  return (
    <div className="lista">
      <label>{props.label}</label>
      <select required={props.obrigatorio} className="lista">
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Lista;
