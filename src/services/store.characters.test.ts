import { HttpStoreCharacter } from './store.characters';

describe('Given HttpStoreCharacter', () => {
    describe('When we instantiate', () => {
        describe('And we use method getCharacters', () => {
            test('Then it should return a array of two character', async () => {
                // arrange
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue([
                        // TODO cambiar por mock de personajes
                        {
                            id: 1,
                            name: 'Rick Sanchez',
                            status: 'Alive',
                        },
                        {
                            id: 2,
                            name: 'Rick Sanchez',
                            status: 'Alive',
                        },
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
                const characterid = 1;
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue({ name: 'test', id: characterid }),
                });
                // act
                const result = await new HttpStoreCharacter().getCharacter(
                    characterid
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.id).toBe(1);
                // expect(result).toEqual()
            });
        });

        describe('And we use method setCharacter', () => {
            test('Then it should return the added character', async () => {
                // arrange
                const character = { name: 'Rick Sanchez', status: 'Alive' };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        name: 'Rick Sanchez',
                        status: 'Alive',
                    }),
                });
                // act
                const result = await new HttpStoreCharacter().setCharacter(
                    character
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.name).toBe('Rick Sanchez');
            });
        });
        describe('And we use method updateCharacter', () => {
            test('Then it should return the updated character', async () => {
                // arrange
                const character = { name: 'Rick Sanchez', status: 'Alive' };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        name: 'Rick Sanchez',
                        status: 'Alive',
                    }),
                });
                // act
                const result = await new HttpStoreCharacter().updateCharacter(
                    character
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.name).toBe('Rick Sanchez');
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
