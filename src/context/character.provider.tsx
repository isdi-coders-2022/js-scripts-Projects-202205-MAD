import { ReactElement, useEffect, useReducer, useState } from 'react';
import { iCharacter } from '../interfaces/interfaz';
import { characterReducer } from '../reducers/reducer/reduce';
import { CharacterApi } from '../services/api';
import { CharactersContext } from './character.context';
import * as actions from '../reducers/reducer/action.creators';
import * as actionsFav from '../reducers/reducerFav/actionFav.creators';
import { characterFavReducer } from '../reducers/reducerFav/reducefav';
import { HttpStoreCharacter } from '../services/store.characters';
import { useAuth0 } from '@auth0/auth0-react';
import { CharacterApiBrowser } from '../services/apiBuscador';

export function CharacterContextProvider({
    children,
}: {
    children: ReactElement;
}): JSX.Element {
    const initialState: Array<iCharacter> = [];

    const [characters, dispatch] = useReducer(characterReducer, initialState);
    const [charactersBrowser, dispatchBrowser] = useReducer(
        characterReducer,
        initialState
    );

    const [currentName, setCurrentName] = useState('');
    useEffect(() => {
        CharacterApiBrowser.getCharacters(currentName).then((resp) => {
            const newResp = resp.results.map(
                (item: any) => (item = { ...item, favorite: false })
            );
            dispatchBrowser(actions.loadCharactersAction(newResp));
        });
    }, [currentName]);

    function FindCharacter(name: string) {
        setCurrentName(name);
    }

    const [currentPage, setCurrentPage] = useState(1);

    const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

    useEffect(() => {
        CharacterApi.getCharacters(currentPage).then((resp) => {
            const newResp = resp.results.map(
                (item: any) => (item = { ...item, favorite: false })
            );
            dispatch(actions.loadCharactersAction(newResp));
        });
    }, [currentPage]);

    function nextPage(count: string) {
        if (count === 'sum') {
            setCurrentPage((prev) => prev + 1);
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }
    const store = new HttpStoreCharacter();
    const initialStateFav: Array<iCharacter> = [];
    const [charactersFav, dispatchFav] = useReducer(
        characterFavReducer,
        initialStateFav
    );

    useEffect(() => {
        store.getCharacters(user?.nickname as string).then((resp) => {
            dispatchFav(actionsFav.loadCharactersFavAction(resp));
        });
    }, [user]);

    const addCharacter = (character: iCharacter) => {
        store
            .setCharacter(character)
            .then((resp) =>
                dispatchFav(actionsFav.addCharactersFavAction(resp))
            );
    };
    const deleteCharacter = (character: iCharacter) => {
        store
            .deleteCharacter(String(character.id))
            .then((resp) =>
                dispatchFav(actionsFav.deteleCharactersFavAction(character))
            );
    };
    const toggleComplete = (character: iCharacter) => {
        store
            .updateCharacter(character)
            .then((resp) =>
                dispatchFav(actionsFav.upadteCharactersFavAction(character))
            );
    };

    const context = {
        characters,
        nextPage,
        currentPage,
        charactersFav,
        addCharacter,
        deleteCharacter,
        toggleComplete,
        user,
        isAuthenticated,
        currentName,
        charactersBrowser,
        FindCharacter,
    };

    return (
        <CharactersContext.Provider value={context}>
            {children}
        </CharactersContext.Provider>
    );
}
