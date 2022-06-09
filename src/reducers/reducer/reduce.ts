// Función pura
// recibe un estado y una acción
// retorna un NUEVO estado (NO HAY MUTACIÓN)

import { iCharacter } from '../../interfaces/interfaz';
import { iAction } from './action.creators';
import { actionTypes } from './action.types';

export function characterReducer(
    initalState: Array<iCharacter>,
    action: iAction
) {
    let state: Array<iCharacter> = [];
    switch (action.type) {
        case actionTypes['characters@load']:
            state = action.payload;
            break;
        case actionTypes['characters@add']:
            state = [...initalState, action.payload];
            break;
        case actionTypes['characters@update']:
            state = initalState.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            break;
        case actionTypes['characters@delete']:
            state = initalState.filter((item) => item.id !== action.payload.id);
            break;
        default:
            state = initalState;
    }
    return state;
}
