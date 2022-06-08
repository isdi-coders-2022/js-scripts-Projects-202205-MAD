// Función pura
// recibe un estado y una acción
// retorna un NUEVO estado (NO HAY MUTACIÓN)

import { iCharacter } from '../../interfaces/interfaz';
import { iActionFav } from './actionFav.creators';
import { actionTypesFav } from './actionFav.types';

export function characterFavReducer(
    initalState: Array<iCharacter>,
    action: iActionFav
) {
    let state: Array<iCharacter> = [];
    switch (action.type) {
        case actionTypesFav['charactersFav@load']:
            console.log(action.payload);
            state = action.payload;
            break;
        case actionTypesFav['charactersFav@add']:
            state = [...initalState, action.payload];
            break;
        case actionTypesFav['charactersFav@update']:
            state = initalState.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            break;
        case actionTypesFav['charactersFav@delete']:
            state = initalState.filter((item) => item.id !== action.payload.id);
            break;
        default:
            state = initalState;
    }
    return state;
}
