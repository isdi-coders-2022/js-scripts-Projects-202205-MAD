import { useContext, SyntheticEvent } from 'react';
import { CharactersContext } from '../../context/character.context';
import './browser.css';

export function Browser() {
    const { FindCharacter } = useContext(CharactersContext);

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        const searchValue = element.value;

        FindCharacter(searchValue);
    }

    const template = (
        <>
            <div className="container__browser">
                <form action="">
                    <input
                        type="text"
                        name=""
                        id="Browser"
                        placeholder="Search for your character"
                        onInput={handleChange}
                    />
                </form>
            </div>
        </>
    );

    return template;
}

export default Browser;
