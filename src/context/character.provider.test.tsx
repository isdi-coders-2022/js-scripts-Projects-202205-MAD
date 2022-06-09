import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { HttpStoreCharacter } from '../services/store.characters';
import { CharactersContext } from './character.context';
import { CharacterContextProvider } from './character.provider';

jest.mock('../services/store.characters');

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

const character2 = {
    id: 345,
    name: '3mosqueteros',
};

describe('Given the context', () => {
    describe('When it is used by a test component', () => {
        let TestComponent: () => JSX.Element;
        beforeEach(() => {
            HttpStoreCharacter.prototype.getCharacters = jest
                .fn()
                .mockResolvedValue([character]);
            TestComponent = function () {
                const {
                    charactersFav,
                    addCharacter,
                    toggleComplete,
                    deleteCharacter,
                } = useContext(CharactersContext);
                return (
                    <>
                        <p>Probando contexto</p>
                        <ul>
                            {charactersFav.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={() => {
                                addCharacter(character);
                            }}
                        >
                            Add Character
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                toggleComplete(character);
                            }}
                        >
                            Complete Character
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                deleteCharacter(character);
                            }}
                        >
                            Delete Character
                        </button>
                    </>
                );
            };
        });

        test('Then characterlist should be render from context', async () => {
            render(
                <CharacterContextProvider>
                    <TestComponent></TestComponent>
                </CharacterContextProvider>
            );
            let element = screen.getByText(/Probando contexto/i);
            expect(element).toBeInTheDocument();
            expect(
                HttpStoreCharacter.prototype.getCharacters
            ).toHaveBeenCalled();
            element = await screen.findByText(/Armagheadon/i);
            expect(element).toBeInTheDocument();
        });
        test('Then new character should be render when add button is clicked', async () => {
            HttpStoreCharacter.prototype.setCharacter = jest
                .fn()
                .mockResolvedValue(character2);

            render(
                <CharacterContextProvider>
                    <TestComponent></TestComponent>
                </CharacterContextProvider>
            );

            userEvent.click(screen.getByText(/Add Character/i));
            expect(
                HttpStoreCharacter.prototype.setCharacter
            ).toHaveBeenCalled();
            let element = await screen.findByText(/Armagheadon/i);
            expect(element).toBeInTheDocument();
        });
        test('Then a character should be favorite when button is clicked', async () => {
            character.favorite = true;
            HttpStoreCharacter.prototype.updateCharacter = jest
                .fn()
                .mockResolvedValue(character);

            render(
                <CharacterContextProvider>
                    <TestComponent></TestComponent>
                </CharacterContextProvider>
            );
            await screen.findByText(/Armagheadon/i);
            userEvent.click(screen.getByText(/Complete Character/i));
            expect(
                HttpStoreCharacter.prototype.updateCharacter
            ).toHaveBeenCalled();
        });
        test('Then a character should be deleted when delete button is clicked', async () => {
            HttpStoreCharacter.prototype.deleteCharacter = jest
                .fn()
                .mockResolvedValue({ status: 200 });
            render(
                <CharacterContextProvider>
                    <TestComponent></TestComponent>
                </CharacterContextProvider>
            );
            userEvent.click(screen.getByText(/Delete Character/i));
            expect(
                HttpStoreCharacter.prototype.deleteCharacter
            ).toHaveBeenCalled();
        });
    });
});
