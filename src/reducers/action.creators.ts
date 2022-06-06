import { iCharacter } from '../interfaces/interfaz';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadCharactersAction = (
    characters: Array<iCharacter>
): iAction => ({
    type: actionTypes['characters@load'],
    payload: characters,
});

export const addCharacterAction = (character: iCharacter): iAction => ({
    type: actionTypes['characters@add'],
    payload: character,
});

export const updateCharacterAction = (character: iCharacter): iAction => ({
    type: actionTypes['characters@update'],
    payload: character,
});

export const deleteCharacterAction = (character: iCharacter): iAction => ({
    type: actionTypes['characters@delete'],
    payload: character,
});
