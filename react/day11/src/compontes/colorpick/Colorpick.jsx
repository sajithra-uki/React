import React, { useState } from 'react';

function ColorPicker() {
  
  const [selectedColor, setSelectedColor] = useState('#007bff'); 

  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h3>React Color Picker</h3>

     
      
    
      <p>Selected Color: **{selectedColor}**</p>
       
      

      <div 
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor, 
          marginTop: '10px',
          border: '1px solid #ccc'
        }}
      >
        <p style={{ color: 'white', textAlign: 'center', paddingTop: '35px' }}>
          Example
        </p>
      </div>
      <input
        type="color"
        value={selectedColor} 
        onChange={handleColorChange} 
      />
    </div>
  );
}

export default ColorPicker;