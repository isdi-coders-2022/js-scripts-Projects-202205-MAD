import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import './navButtons.css';
export function NavButtons() {
    const { nextPage, currentPage } = useContext(CharactersContext);

    const template = (
        <>
            <section className="container__navbutton">
                <>
                    {currentPage <= 1 ? (
                        ''
                    ) : (
                        <button
                            title="PreviousButton"
                            className="Nav-Button"
                            onClick={() => {
                                nextPage('rest');
                            }}
                            id="previous"
                        >
                            PREVIOUS
                        </button>
                    )}
                </>
                <button
                    title="NextButton"
                    className="Nav-Button"
                    onClick={() => {
                        nextPage('sum');
                    }}
                    id="next"
                >
                    NEXT
                </button>
            </section>
        </>
    );

    return template;
}
