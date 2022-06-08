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
                const characterid = '1';
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
                expect(result.id).toBe('1');
                // expect(result).toEqual()
            });
        });

        describe('And we use method setCharacter', () => {
            test('Then it should return the added character', async () => {
                // arrange
                const character = {
                    id: 6,
                    name: 'Abadango Cluster Princess',
                    status: 'Alive',
                    species: 'Alien',
                    type: '',
                    gender: 'Female',
                    origin: {
                        name: 'Abadango',
                        url: 'https://rickandmortyapi.com/api/location/2',
                    },
                    location: {
                        name: 'Abadango',
                        url: 'https://rickandmortyapi.com/api/location/2',
                    },
                    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                    episode: ['https://rickandmortyapi.com/api/episode/27'],
                    url: 'https://rickandmortyapi.com/api/character/6',
                    created: '2017-11-04T19:50:28.250Z',
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        id: 6,
                        name: 'Abadango Cluster Princess',
                        status: 'Alive',
                        species: 'Alien',
                        type: '',
                        gender: 'Female',
                        origin: {
                            name: 'Abadango',
                            url: 'https://rickandmortyapi.com/api/location/2',
                        },
                        location: {
                            name: 'Abadango',
                            url: 'https://rickandmortyapi.com/api/location/2',
                        },
                        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                        episode: ['https://rickandmortyapi.com/api/episode/27'],
                        url: 'https://rickandmortyapi.com/api/character/6',
                        created: '2017-11-04T19:50:28.250Z',
                    }),
                });
                // act
                const result = await new HttpStoreCharacter().setCharacter(
                    character
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.id).toBe(6);
            });
        });
        describe('And we use method updateCharacter', () => {
            test('Then it should return the updated character', async () => {
                // arrange
                const character = {
                    id: 6,
                    name: 'Abadango Cluster Princess',
                    status: 'Alive',
                    species: 'Alien',
                    type: '',
                    gender: 'Female',
                    origin: {
                        name: 'Abadango',
                        url: 'https://rickandmortyapi.com/api/location/2',
                    },
                    location: {
                        name: 'Abadango',
                        url: 'https://rickandmortyapi.com/api/location/2',
                    },
                    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                    episode: ['https://rickandmortyapi.com/api/episode/27'],
                    url: 'https://rickandmortyapi.com/api/character/6',
                    created: '2017-11-04T19:50:28.250Z',
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        id: 6,
                        name: 'Abadango Cluster Princess',
                        status: 'Alive',
                        species: 'Alien',
                        type: '',
                        gender: 'Female',
                        origin: {
                            name: 'Abadango',
                            url: 'https://rickandmortyapi.com/api/location/2',
                        },
                        location: {
                            name: 'Abadango',
                            url: 'https://rickandmortyapi.com/api/location/2',
                        },
                        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                        episode: ['https://rickandmortyapi.com/api/episode/27'],
                        url: 'https://rickandmortyapi.com/api/character/6',
                        created: '2017-11-04T19:50:28.250Z',
                    }),
                });
                // act
                const result = await new HttpStoreCharacter().updateCharacter(
                    character
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.id).toBe(6);
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
