import { iCharacter } from '../../interfaces/interfaz';
import { ImageCard } from '../characterCard/imageCard';
import './characterList.css';

export function CharacterList({
    characters,
}: {
    characters: Array<iCharacter>;
}) {
    const template = (
        <ul className="list__card">
            {characters.length &&
                characters.map((character: iCharacter) => (
                    <li className="wrapper__image" key={character.id}>
                        <ImageCard character={character}></ImageCard>
                    </li>
                ))}
        </ul>
    );

    return template;
}
