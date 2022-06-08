// Función pura
// recibe un estado y una acción
// retorna un NUEVO estado (NO HAY MUTACIÓN)

import { iCharacter } from '../../interfaces/interfaz';
import { iActionFav } from './actionFav.creators';
import { actionTypesFav } from './actionFav.types';

export function characterFavReducer(
    initialStateFav: Array<iCharacter>,
    actionFav: iActionFav
) {
    let state: Array<iCharacter> = [];
    switch (actionFav.type) {
        case actionTypesFav['charactersFav@load']:
            console.log(actionFav.payload);
            state = actionFav.payload;
            break;
        case actionTypesFav['charactersFav@add']:
            state = [...initialStateFav, actionFav.payload];
            break;
        case actionTypesFav['charactersFav@update']:
            state = initialStateFav.map((item) =>
                item.id === actionFav.payload.id ? actionFav.payload : item
            );
            break;
        case actionTypesFav['charactersFav@delete']:
            state = initialStateFav.filter(
                (item) => item.id !== actionFav.payload.id
            );
            break;
        default:
            state = initialStateFav;
    }
    return state;
}
