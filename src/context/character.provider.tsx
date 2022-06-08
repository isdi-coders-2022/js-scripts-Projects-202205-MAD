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
    const initialState: Array<iCharacter> = [];
    // const [characters, setCharacters] = useState(initialState);

    const [characters, dispatch] = useReducer(characterReducer, initialState);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        CharacterApi.getCharacters(currentPage).then((resp) => {
            dispatch(actions.loadCharactersAction(resp.results));
        });
    }, [currentPage]);

    function nextPage(count: string) {
        if (count === 'sum') {
            setCurrentPage((prev) => prev + 1);
        } else {
            setCurrentPage((prev) => prev - 1);
        }
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
        currentPage,
    };

    return (
        <CharactersContext.Provider value={context}>
            {children}
        </CharactersContext.Provider>
    );
}
