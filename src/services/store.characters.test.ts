//import { iCharacter } from '../interfaces/interfaz';
import { HttpStoreCharacter } from './store.characters';

let mockObj = {
    name: '', //"""Rick Sanchez";
    status: '', //"Alive";
};

describe('Given HttpStoreCharacter', () => {
    describe('When we instantiate', () => {
        describe('And we use method getCharacters', () => {
            test('Then it should return a array of two tasks', async () => {
                // arrange
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue([
                            mockObj ={"Rick Sanchez", "Alive"}
                        ]),
                });
                // act
                const result = await new HttpStoreCharacter().getCharacters();
                //
                // assert
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        describe('And we use method getCharacter', () => {
            test('Then it should return a character', async () => {
                // arrange
                const characterId = 1;
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(new TaskModel('Task1', 'Pepe')),
                });
                // act
                const result = await new HttpStoreCharacter().getCharacter(
                    taskId
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.title).toBe('Task1');
            });
        });

        describe('And we use method setCharacter', () => {
            test('Then it should return the added task', async () => {
                // arrange
                const character = new TaskModel('Task1', 'Pepe');
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(new TaskModel('Task1', 'Pepe')),
                });
                // act
                const result = await new HttpStoreCharacter().setCharacter(
                    character
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.title).toBe('Task1');
            });
        });
        describe('And we use method updateCharacter', () => {
            test('Then it should return the updated character', async () => {
                // arrange
                const character = new TaskModel('Task1', 'Pepe');
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(new TaskModel('Task1', 'Pepe')),
                });
                // act
                const result = await new HttpStoreCharacter().updateCharacter(
                    character
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.title).toBe('Task1');
            });
        });
        describe('And we use method deleteCharacter', () => {
            test('Then it should return a status ok', async () => {
                // arrange
                const deleteId = '1';
                global.fetch = jest.fn().mockResolvedValue({
                    status: 200,
                });
                // act
                const result = await new HttpStoreCharacter().deleteCharacter(
                    deleteId
                );
                expect(fetch).toBeCalled();
                expect(result).toBe(200);
            });
        });
    });
});
