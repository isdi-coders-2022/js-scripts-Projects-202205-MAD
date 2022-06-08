import { iCharacter } from '../../interfaces/interfaz';
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
