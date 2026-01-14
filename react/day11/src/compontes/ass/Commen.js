import React from 'react';
import { useFontSize } from '../context/FontSizeContext';

const FontSizeControls = () => {
    const { changeFontSize, FONT_SIZES } = useFontSize();

    return (
        <div style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <span style={{ marginRight: '15px', fontWeight: 'bold' }}>Change Font Size:</span>
            {Object.keys(FONT_SIZES).map((size) => (
                <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    style={{ 
                        marginRight: '10px', 
                        padding: '5px 10px',
                        textTransform: 'capitalize' 
                    }}
                >
                    {size} ({FONT_SIZES[size]})
                </button>
            ))}
        </div>
    );
};

export default FontSizeControls;
