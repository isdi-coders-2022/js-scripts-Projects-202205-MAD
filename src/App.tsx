import React from 'react';
import './App.css';
import { HomePage } from './pages/homePage';
import { CharacterContextProvider } from './context/character.provider';

function App() {
    return (
        <>
            <CharacterContextProvider>
                <HomePage />
            </CharacterContextProvider>
        </>
    );
}

export default App;
