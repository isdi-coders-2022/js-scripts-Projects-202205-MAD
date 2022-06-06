import { ReactElement, useEffect, useState } from 'react';
import { iCharacter } from '../interfaces/interfaz';
import { CharacterApi } from '../services/api';
import { CharactersContext } from './character.context';

export function CharacterContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: Array<iCharacter> = [];
    const [characters, setCharacters] = useState(initialState);

    useEffect(() => {
        CharacterApi.getCharacters()
            .then((resp) => resp)
            .then((obj) => {
                console.log(obj.results);
                setCharacters(obj.results);
            });
    }, []);

    const context = {
        characters,
    };

    return (
        <CharactersContext.Provider value={context}>
            {children}
        </CharactersContext.Provider>
    );
}
