import { useContext, SyntheticEvent, useState, FormEvent } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';

export function Browser() {
    const { FindCharacter, currentName } = useContext(CharactersContext);

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        const searchValue = element.value;

        FindCharacter(searchValue);
    }

    const template = (
        <>
            <form action="">
                <input
                    type="text"
                    name=""
                    id="Browser"
                    placeholder="Busca tu personaje"
                    onInput={handleChange}
                />
            </form>
        </>
    );

    return template;
}

export default Browser;
