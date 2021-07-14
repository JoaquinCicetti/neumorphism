import React from 'react';
import { ShadowGenerator } from './components/ShadowGenerator/ShadowGenerator';
import { Provider as ThemeProvider} from './theme/ThemeContext';
import './App.scss';

export const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ShadowGenerator />
        </ThemeProvider>
    );
};

export default App;
