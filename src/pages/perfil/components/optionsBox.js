import React, { useState, useEffect } from "react";
import "./optionsBox.css";

export default function OptionsBox(props) {
  const [options, setOptions] = useState(["", ""]);
  useEffect(() => {
    props.setQuestion({ ...props.question, options: options });
  }, [options]);

  const handleOptions = (id, value) => {
    const temp = options;
    temp[id] = value;
    setOptions([...temp]);
  };
  const handleDelete = id => {
    if (options.length > 2) {
      const temp = options;
      temp.splice(id, 1);
      setOptions([...temp]);
    }
  };
  const handleAdd = () => {
    if (options.length < 5) {
      const temp = options;
      temp.push("");
      setOptions([...temp]);
    }
  };
  return (
    <div className="made-new-options">
      <div className="create-options">
        <div className="title">Criar Opções</div>
        {options.map((item, index) => (
          <div key={index} className="option-box">
            <input
              type="text"
              value={item}
              onChange={e => handleOptions(index, e.target.value)}
            />
            <button onClick={() => handleDelete(index)}>Apagar</button>
          </div>
        ))}
      </div>
      <button onClick={handleAdd} className="add-button">
        Adicionar
      </button>
    </div>
  );
}
