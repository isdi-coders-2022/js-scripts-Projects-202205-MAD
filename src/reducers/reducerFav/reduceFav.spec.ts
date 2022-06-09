import { iCharacter } from '../../interfaces/interfaz';
import { characterFavReducer } from './reducefav';
import * as action from './actionFav.creators';

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
            const newState = characterFavReducer(
                [],
                action.loadCharactersFavAction([mockCharacter])
            );

            expect(newState).toEqual([mockCharacter]);
        });
    });
    describe('When calling with add action', () => {
        test('Should add a character', () => {
            const newState = characterFavReducer(
                [],
                action.addCharactersFavAction(mockCharacter)
            );

            expect(newState).toEqual([mockCharacter]);
        });
    });
    describe('When calling with update action', () => {
        test('Should update state', () => {
            const newState = characterFavReducer(
                [],
                action.upadteCharactersFavAction(mockCharacter)
            );

            expect(newState).toEqual([]);
        });
    });
    describe('When calling with delete action', () => {
        test('Should delete item', () => {
            const newState = characterFavReducer(
                [mockCharacter],
                action.deteleCharactersFavAction(mockCharacter)
            );

            expect(newState).toEqual([]);
        });
    });
});
