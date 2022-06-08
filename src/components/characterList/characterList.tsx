import { useContext } from 'react';
import { CharactersContext } from '../../context/character.context';
import { iCharacter } from '../../interfaces/interfaz';
import { CharacterCard } from '../characterCard/characterCard';
import { ImageCard } from '../characterCard/imageCard';

export function CharacterList({
    characters,
}: {
    characters: Array<iCharacter>;
}) {
    const template = (
        <ul>
            {characters.length &&
                characters.map((character: iCharacter) => (
                    <li key={character.id}>
                        <ImageCard character={character}></ImageCard>
                    </li>
                ))}
        </ul>
    );

    return template;
}
