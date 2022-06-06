import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';
import { CharacterCard } from '../characterCard/characterCard';

export function CharacterList() {
    const { characters } = useContext(CharactersContext);
    const template = (
        <ul>
            {characters.map((item: iCharacter) => (
                <li key={item.id}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    );

    return template;
}
