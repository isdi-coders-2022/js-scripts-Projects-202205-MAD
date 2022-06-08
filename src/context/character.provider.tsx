import { ReactElement, useEffect, useReducer, useState } from 'react';
import { iCharacter } from '../interfaces/interfaz';
import { characterReducer } from '../reducers/reduce';
import { CharacterApi } from '../services/api';
import { CharactersContext } from './character.context';
import * as actions from '../reducers/action.creators';
import { characterFavReducer } from '../reducers/reducefav';
import { HttpStoreCharacter } from '../services/store.characters';

export function CharacterContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: Array<iCharacter> = [];

    const [characters, dispatch] = useReducer(characterReducer, initialState);
    const [charactersFav, dispatchFav] = useReducer(
        characterFavReducer,
        initialState
    );
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        CharacterApi.getCharacters(currentPage).then((resp) => {
            dispatch(actions.loadCharactersAction(resp.results));
        });
    }, [currentPage]);

    useEffect(() => {
        HttpStoreCharacter.prototype.getCharacters().then((resp) => {
            dispatchFav(actions.loadCharactersAction(resp.results));
        });
    }, []);

    function nextPage(count: string) {
        if (count === 'sum') {
            setCurrentPage((prev) => prev + 1);
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }

    const context = {
        characters,
        nextPage,
        currentPage,
        charactersFav,
    };

    return (
        <CharactersContext.Provider value={context}>
            {children}
        </CharactersContext.Provider>
    );
}
