import { CharacterApi } from './api';

describe('Given characterApi', () => {
    describe('When we instantiate', () => {
        describe('And we use method getCharacters', () => {
            test('Then the fetch should return an array of 2 characters', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue([
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
                const result = await CharacterApi.getCharacters(1);
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
    });
});
