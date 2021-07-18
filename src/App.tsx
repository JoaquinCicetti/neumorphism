import React from 'react';
import { Playground } from './components/Playground/Playground';
import { Provider as ThemeProvider } from './theme/ThemeContext';
import './App.scss';

export const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Playground />
        </ThemeProvider>
    );
};

export default App;
