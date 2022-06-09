import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharactersContext } from '../../context/character.context';
import { FavButtons } from './favButtons';

describe('Given the function FavButtons', () => {
    describe('When calling it', () => {
        test('should first', () => {
            const mock = {
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
            const context = {
                charactersBrowser: [],
                characters: [],
                nextPage: jest.fn(),
                currentPage: 1,
                charactersFav: [],
                addCharacter: jest.fn(),
                deleteCharacter: jest.fn(),
                toggleComplete: jest.fn(),
                user: {},
                isAuthenticated: false,
                currentName: '',
                FindCharacter: () => {},
            };

            render(
                <CharactersContext.Provider value={context}>
                    <FavButtons character={mock} />
                </CharactersContext.Provider>
            );
            const button = screen.getByRole('button');

            userEvent.click(button);
            expect(context.addCharacter).toHaveBeenCalled();
        });
    });
});
