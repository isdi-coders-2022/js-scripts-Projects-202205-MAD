import { iCharacter } from '../../interfaces/interfaz';

import './characterCard.css';

export function CharacterCard({ character }: { character: iCharacter }) {
    const template = (
        <>
            <div>
                <img className="image__details" src={character.image} alt="" />
            </div>
            <div className="description__details">
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Specie: {character.species}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </>
    );

    return template;
}
