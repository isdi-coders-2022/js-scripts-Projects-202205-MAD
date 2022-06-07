import { SyntheticEvent, useContext, useState } from 'react';
import { CharactersContext } from '../../context/character.context';
export function NavButtons() {
    function handlerButton(ev: SyntheticEvent) {
        const element = (ev.target as HTMLElement).id;
        if (element === 'next') {
        } else {
        }
    }

    const template = (
        <>
            <section>
                <button
                    title="NextButton"
                    className="Nav-Button"
                    onClick={handlerButton}
                    id="next"
                >
                    NEXT
                </button>
                <button
                    title="PreviousButton"
                    className="Nav-Button"
                    onClick={handlerButton}
                    id="previous"
                >
                    PREVIOUS
                </button>
            </section>
        </>
    );

    return template;
}
