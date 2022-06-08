import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';

import './favbutton.css';

export function FavButtons({ character }: { character: iCharacter }) {
    const { addCharacter, charactersFav, deleteCharacter } =
        useContext(CharactersContext);

    const fav = { ...character, favorite: true };

    const template = (
        <>
            <div
                role="button"
                className={
                    charactersFav.find((item) => item.id === character.id)
                        ? 'button__fav favorite'
                        : 'button__fav '
                }
                onClick={() => {
                    addCharacter(fav);
                }}
            >
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="FavIcon"
                />
            </div>
        </>
    );
    return template;
}
