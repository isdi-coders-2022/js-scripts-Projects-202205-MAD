import { ReactElement, SyntheticEvent, useContext, useState } from 'react';
import { CharactersContext } from '../../context/character.context';
export function NavButtons() {
    const { nextPage, currentPage } = useContext(CharactersContext);

    const template = (
        <>
            <section>
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
            </section>
        </>
    );

    return template;
}
