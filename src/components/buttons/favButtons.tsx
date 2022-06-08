import { SyntheticEvent } from 'react';
import { iCharacter } from '../../interfaces/interfaz';
import { addCharactersFavAction } from '../../reducers/reducerFav/actionFav.creators';
import './favbutton.css';

export function FavButtons({ character }: { character: iCharacter }) {
    const template = (
        <>
            <div
                role="button"
                className="button__fav"
                onClick={() => {
                    addCharactersFavAction(character);
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
