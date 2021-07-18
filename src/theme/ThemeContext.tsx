import React from 'react';
import { Color, RGBAColor } from '../utils/Color';
import { generateBackgroundColor, generateReadableFontColor } from '../utils/colorGeneration';

type ThemeGenerator = (color: RGBAColor) => Theme;
export interface Theme {
    background: RGBAColor;
    text: RGBAColor;
    accent: RGBAColor;
}

const generateTheme: ThemeGenerator = (color) => {
    const defaultAccent: RGBAColor = color;
    const defaultBackground: RGBAColor = generateBackgroundColor(defaultAccent);
    const defaultText: RGBAColor = generateReadableFontColor(defaultBackground);

    return {
        background: defaultBackground,
        text: defaultText,
        accent: defaultAccent,
    };
};

const defaultTheme: Theme = generateTheme(Color.fromHEX('#92354c').rgba);

export interface ThemeContext {
    theme: Theme;
    setAccent: (newColor: RGBAColor) => void;
}

const defaultContext: ThemeContext = {
    theme: defaultTheme,
    setAccent: (newColor: RGBAColor) => console.warn('Context not intialized'),
};

export const Context = React.createContext<ThemeContext>(defaultContext);

export const Provider: React.FC = (props) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const setAccent = (newColor: RGBAColor) => {
        const newTheme = generateTheme(newColor);

        setTheme(newTheme);
    };

    const value = {
        theme,
        setAccent,
    };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
