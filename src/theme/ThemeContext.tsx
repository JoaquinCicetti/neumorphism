import React from 'react';
import { Color, RGBAColor } from '../utils/Color';
import { generateBackgroundColor, generateReadableFontColor } from '../utils/colorGeneration';

type ThemeGenerator = (color: string) => Theme;
export interface Theme {
    background: RGBAColor;
    text: RGBAColor;
    brand: RGBAColor;
}

const generateTheme: ThemeGenerator = (hexColor) => {
    const defaultBrand: RGBAColor = Color.fromHEX(hexColor).rgba;
    const defaultBackground: RGBAColor = generateBackgroundColor(defaultBrand);
    const defaultText: RGBAColor = generateReadableFontColor(defaultBackground);

    return {
        background: defaultBackground,
        text: defaultText,
        brand: defaultBrand,
    };
};

const defaultTheme: Theme = generateTheme('#92354c');

export interface ThemeContext {
    theme: Theme;
    setBrand: (hexColor: string) => void;
}

const defaultContext: ThemeContext = {
    theme: defaultTheme,
    setBrand: (hexColor: string) => console.warn('Context not intialized'),
};

export const Context = React.createContext<ThemeContext>(defaultContext);

export const Provider: React.FC = (props) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const setBrand = (hexColor: string) => {
        const newTheme = generateTheme(hexColor);

        setTheme(newTheme);
    };

    const value = {
        theme,
        setBrand,
    };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
