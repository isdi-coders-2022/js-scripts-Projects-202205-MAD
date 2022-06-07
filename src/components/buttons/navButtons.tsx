import { SyntheticEvent, useContext, useState } from 'react';
import { CharactersContext } from '../../context/character.context';
export function NavButtons() {
    const initialPage = 1;

    const [currentPage, setcurrentPage] = useState(initialPage);

    const template = (
        <>
            <section>
                <button
                    title="NextButton"
                    className="Nav-Button"
                    onClick={() => setcurrentPage(currentPage + 1)}
                    id="next"
                >
                    NEXT
                </button>
                <>
                    {currentPage === 1 ? (
                        ''
                    ) : (
                        <button
                            title="PreviousButton"
                            className="Nav-Button"
                            onClick={() => setcurrentPage(currentPage - 1)}
                            id="previous"
                        >
                            PREVIOUS
                        </button>
                    )}
                </>
            </section>
        </>
    );
    console.log(currentPage);

    return template;
}
