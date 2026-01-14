import React, { useState } from 'react';

function stateBox(initialValue) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(initialValue);


  const clearValue = () => {
    setValue(initialValue);
  };

  
  return [value, setValue, clearValue];
}

export default stateBox;
