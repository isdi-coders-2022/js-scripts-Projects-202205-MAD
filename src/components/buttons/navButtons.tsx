import { ReactElement, SyntheticEvent, useContext, useState } from 'react';
import { CharactersContext } from '../../context/character.context';
export function NavButtons() {
    const { nextPage } = useContext(CharactersContext);

    const [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage);
    const template = (
        <>
            <section>
                <button
                    title="NextButton"
                    className="Nav-Button"
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        nextPage(currentPage);
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
                                setCurrentPage(currentPage - 1);
                                nextPage(currentPage);
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
