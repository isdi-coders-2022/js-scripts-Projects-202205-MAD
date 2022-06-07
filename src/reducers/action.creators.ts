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

// export const addCharactersAction = (characters: iCharacter) => ({
//     type: actionTypes['characters@add'],
//     payload: characters,
// });

// export const upadteCharactersAction = (characters: iCharacter) => ({
//     type: actionTypes['characters@update'],
//     payload: characters,
// });

export const deteleCharactersAction = (characters: iCharacter) => ({
    type: actionTypes['characters@delete'],
    payload: characters,
});
