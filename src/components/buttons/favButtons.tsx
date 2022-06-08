import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';

import './favbutton.css';

export function FavButtons({ character }: { character: iCharacter }) {
    const { addCharacter } = useContext(CharactersContext);
    const fav = { ...character, favorite: true };

    const template = (
        <>
            <div
                role="button"
                className="button__fav"
                onClick={() => {
                    addCharacter(fav);
                }}
            >
                <img
                    src={
                        character.favorite === true
                            ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                            : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
                    }
                    alt="FavIcon"
                />
            </div>
        </>
    );
    return template;
}
