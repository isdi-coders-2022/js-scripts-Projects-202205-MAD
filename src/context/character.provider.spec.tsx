import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { CharactersContext } from './character.context';
import { CharacterContextProvider } from './character.provider';

test('renders characters from context', async () => {
    const TestComponent = function () {
        const { characters, nextPage } = useContext(CharactersContext);

        return (
            <>
                <p>Probando contexto</p>
                <ul>
                    {characters.map((item) => (
                        <li key={item.name}>
                            {item.name}
                            <button
                                type="button"
                                onClick={() => {
                                    nextPage(3);
                                }}
                            >
                                Jorge
                            </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    };
    render(
        <CharacterContextProvider>
            <TestComponent></TestComponent>
        </CharacterContextProvider>
    );

    // act(() => {
    //     /* fire events that update state */

    // });

    const element = screen.getByText(/Probando contexto/i);
    expect(element).toBeInTheDocument();
    expect(CharacterContextProvider).toHaveBeenCalled();
});
