import React, { useState } from 'react';
import "./teste.css"

const Checkbox = ({ limit, onChange, checked, label }) => {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </div>
  );
};

const CheckboxGroup = ({ options, limit }) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (option) => {
    if (selected.length >= limit && !selected.includes(option)) {
      return;
    }
    setSelected(
      selected.includes(option)
        ? selected.filter((o) => o !== option)
        : [...selected, option]
    );
  };

  return (
    <div className='testeCheckboxx'>
      {options.map((option) => (
        <Checkbox
          key={option}
          limit={limit}
          checked={selected.includes(option)}
          label={option}
          onChange={() => handleChange(option)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
