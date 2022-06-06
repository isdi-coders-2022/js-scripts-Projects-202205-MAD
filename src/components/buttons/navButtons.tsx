import { SyntheticEvent } from 'react';
export function NavButtons() {
    let index = 1;

    function handlerButton(ev: SyntheticEvent) {
        const element = (ev.target as HTMLElement).id;
        if (element === 'next') {
            index = index + 1;
        } else {
            index = index - 1;
        }
        console.log(index);
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
