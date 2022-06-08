import { iCharacter } from '../../interfaces/interfaz';
import { actionTypesFav } from './actionFav.types';

export interface iActionFav {
    type: actionTypesFav;
    payload?: any;
}

export const loadCharactersFavAction = (
    characters: Array<iCharacter>
): iActionFav => ({
    type: actionTypesFav['charactersFav@load'],
    payload: characters,
});

export const addCharactersFavAction = (characters: iCharacter) => ({
    type: actionTypesFav['charactersFav@add'],
    payload: characters,
});

export const upadteCharactersFavAction = (characters: iCharacter) => ({
    type: actionTypesFav['charactersFav@update'],
    payload: characters,
});

export const deteleCharactersFavAction = (characters: iCharacter) => ({
    type: actionTypesFav['charactersFav@delete'],
    payload: characters,
});
