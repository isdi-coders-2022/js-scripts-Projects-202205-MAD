import { iCharacter } from '../../interfaces/interfaz';
import { characterReducer } from '../reducer/reduce';
import { addCharactersFavAction } from './actionFav.creators';
import { characterFavReducer } from './reducefav';

// Un reducer recive un estado inicial y una acción

// En función del tipo de acción nos devuelve un nuevo estado

// ¿Como testeo?

// Llamo al reducer con un estado inicial y una acción

// Compruebo que el estado resultante coincide con el esperado de ese tipo de acción

// Repito los pasos por cada tipo de acción más el default

describe('first', () => {
    describe('first', () => {
        const mockInitialState: Array<iCharacter> = [];

        const character = {
            id: 24,
            name: 'Armagheadon',
            status: 'Alive',
            species: 'Alien',
            type: 'Cromulon',
            gender: 'Male',
            origin: {
                name: 'Signus 5 Expanse',
                url: 'https://rickandmortyapi.com/api/location/22',
            },
            location: {
                name: 'Signus 5 Expanse',
                url: 'https://rickandmortyapi.com/api/location/22',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
            episode: ['https://rickandmortyapi.com/api/episode/16'],
            url: 'https://rickandmortyapi.com/api/character/24',
            created: '2017-11-05T08:48:30.776Z',
            favorite: true,
        };
        test('should first', () => {
            const [mockInitialState, dispatch] = useReducer(
                characterFavReducer,
                mockInitialState
            );

            addCharactersFavAction;

            expect(mockInitialState.length).toBe(1);
        });
    });
});
