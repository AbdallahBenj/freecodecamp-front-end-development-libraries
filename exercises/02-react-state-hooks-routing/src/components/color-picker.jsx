import { useState } from 'react';

import './color-picker.css';

const ColorPicker = () => {
  const [color, setColor] = useState('#8ec5ff');

  const handleColor = (e) => setColor(e.target.value);
  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input
        id="color-input"
        value={color}
        type="color"
        onChange={handleColor}
      />
    </div>
  );
};

export default ColorPicker;
