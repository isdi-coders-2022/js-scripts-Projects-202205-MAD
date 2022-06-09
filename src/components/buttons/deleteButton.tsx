import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';

import './favbutton.css';

export function DeleteButton({ character }: { character: iCharacter }) {
    const { deleteCharacter } = useContext(CharactersContext);

    const template = (
        <>
            <div
                role="button"
                className="button__fav favorite"
                onClick={() => {
                    const fav = { ...character, favorite: false };
                    deleteCharacter(fav);
                }}
            >
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="FavIcon"
                    className="picachu"
                    title="Delete to favorite"
                />
            </div>
        </>
    );
    return template;
}
