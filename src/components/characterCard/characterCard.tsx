import { iCharacter } from '../../interfaces/interfaz';

export function CharacterCard({ character }: { character: iCharacter }) {
    const template = (
        <>
            <div>
                <img src={character.image} alt="" />
            </div>
            <div>
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Specie: {character.species}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </>
    );

    return template;
}
