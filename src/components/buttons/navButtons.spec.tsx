import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { NavButtons } from './navButtons';

describe('Given the componente Navbutton', () => {
    describe('When calling it', () => {
        test('Render button', () => {
            const context = {
                characters: [],
                nextPage: jest.fn(),
                currentPage: 1,
                charactersFav: [],
                addCharacter: jest.fn(),
                deleteCharacter: jest.fn(),
                toggleComplete: jest.fn(),
            };

            render(
                <CharactersContext.Provider value={context}>
                    <NavButtons />
                </CharactersContext.Provider>
            );
            const button = screen.getByRole('button');

            userEvent.click(button);
            expect(context.nextPage).toHaveBeenCalled();
        });
    });
});
