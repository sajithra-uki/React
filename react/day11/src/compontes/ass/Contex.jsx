import React, { createContext, useState, useContext } from 'react';


const FontSizeContext = Context();


const FONT_SIZES = {
    small: '16px',
    medium: '20px',
    large: '24px',
};

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(FONT_SIZES.medium); // Default to medium

    const changeFontSize = (sizeOption) => {
        setFontSize(FONT_SIZES[sizeOption] || FONT_SIZES.medium);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, changeFontSize, FONT_SIZES }}>
            {children}
        </FontSizeContext.Provider>
    );
};

export const useFontSize = () => {
    return context(FontSizeContext);
};