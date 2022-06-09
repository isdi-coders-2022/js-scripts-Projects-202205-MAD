import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';

import './favbutton.css';

export function FavButtons({ character }: { character: iCharacter }) {
    const { addCharacter, charactersFav, user } = useContext(CharactersContext);

    const { id, name, species, status, image, gender } = character;
    const newId = id;
    const fav: iCharacter = {
        newId,
        name,
        species,
        status,
        image,
        gender,
        favorite: true,
        nickName: user?.nickname,
    };

    const template = (
        <>
            <div
                role="button"
                className={
                    charactersFav.find((item) => item.newId === character.id)
                        ? 'button__fav favorite'
                        : 'button__fav '
                }
                onClick={() => {
                    addCharacter(fav);
                }}
            >
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="buttonfav"
                    className="picachu"
                    title="Add to favorite"
                />
            </div>
        </>
    );
    return template;
}
