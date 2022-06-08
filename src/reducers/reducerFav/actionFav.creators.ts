import { iCharacter } from '../../interfaces/interfaz';
import { actionTypesFav } from './actionFav.types';

export interface iActionFav {
    type: actionTypesFav;
    payload?: any;
}

export const loadCharactersFavAction = (
    charactersFav: Array<iCharacter>
): iActionFav => ({
    type: actionTypesFav['charactersFav@load'],
    payload: charactersFav,
});

export const addCharactersFavAction = (character: iCharacter) => ({
    type: actionTypesFav['charactersFav@add'],
    payload: character,
});

export const upadteCharactersFavAction = (character: iCharacter) => ({
    type: actionTypesFav['charactersFav@update'],
    payload: character,
});

export const deteleCharactersFavAction = (character: iCharacter) => ({
    type: actionTypesFav['charactersFav@delete'],
    payload: character,
});
