import React, { useState } from 'react';


const PRESET_COLORS = [
  '#FF0000', 
  '#008000', 
  '#0000FF', 
  '#FFFF00', 
  '#800080'  
];

function ColorPickerWithPresets() {
  
  const [selectedColor, setSelectedColor] = useState(PRESET_COLORS[0]); 

  
  const handleColorInputChange = (event) => {
    setSelectedColor(event.target.value);
  };
  
  
  const handlePresetClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '300px', marginLeft:"500px" }}>
      
      
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorInputChange}
        
        style={{ width: '200px', height: '100px', marginBottom: '15px', border: 'none' }}
        title="Custom Color Picker"
      />

    
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {PRESET_COLORS.map((color, index) => (
          <button
            key={index}
            
            onClick={() => handlePresetClick(color)}
            style={{
              backgroundColor: color,
              width: '35px',
              height: '35px',
              borderRadius: '5px', 
              border: `2px solid ${selectedColor.toLowerCase() === color.toLowerCase() ? '#333' : 'transparent'}`,
              outline: 'none',
              cursor: 'pointer',
              padding: 0,
              boxShadow: '0 1px 3px rgba(0,0,0,5)'
            }}
            title={color}
          />
        ))}
      </div>

      
      

      
      <div 
        style={{
          width: '100%',
          height: '80px',
          backgroundColor: selectedColor,
          borderRadius: '4px',
          textAlign: 'center',
          lineHeight: '80px',
          color: selectedColor === '#FFFF00' ? '#000' : '#fff', 
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
          
        }}
      >
        Color: {selectedColor}
      </div>
    </div>
  );
}

export default ColorPickerWithPresets;