import { characterReducer } from './reduce';
import * as action from './action.creators';
import { iCharacter } from '../../interfaces/interfaz';

const mockCharacter: iCharacter = {
    id: 1,
    name: 'test',
    status: 'alive',
    species: 'human',
    gender: 'male',
    image: 'testImage',
};

describe('Given our reducer', () => {
    describe('When calling with load action', () => {
        test('Should load an array of mockCharacter', () => {
            const newState = characterReducer(
                [],
                action.loadCharactersAction([mockCharacter])
            );

            expect(newState).toEqual([mockCharacter]);
        });
    });
});
