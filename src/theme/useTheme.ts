import React from 'react';
import { Context, ThemeContext } from './ThemeContext';

export const useTheme = (): ThemeContext => {
    return React.useContext(Context);
};
