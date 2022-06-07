import { ReactElement, useEffect, useReducer, useState } from 'react';
import { iCharacter } from '../interfaces/interfaz';
import { characterReducer } from '../reducers/reduce';
import { CharacterApi } from '../services/api';
import { CharactersContext } from './character.context';
import * as actions from '../reducers/action.creators';

export function CharacterContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const indexPage: number = 1;
    const [currentPage, setCurrentPage] = useState(indexPage);

    const initialState: Array<iCharacter> = [];
    // const [characters, setCharacters] = useState(initialState);

    const [characters, dispatch] = useReducer(characterReducer, initialState);

    useEffect(() => {
        CharacterApi.getCharacters(1).then((resp) =>
            dispatch(actions.loadCharactersAction(resp.results))
        );
    }, []);

    function nextPage(count: number) {
        CharacterApi.getCharacters(count).then((resp) =>
            dispatch(actions.loadCharactersAction(resp.results))
        );
    }

    // useEffect(() => {
    //     CharacterApi.getCharacters()
    //         .then((resp) => resp)
    //         .then((obj) => {
    //             console.log(obj.results);
    //             setCharacters(obj.results);
    //         });
    // }, []);

    const context = {
        characters,
        nextPage,
    };

    return (
        <CharactersContext.Provider value={context}>
            {children}
        </CharactersContext.Provider>
    );
}
