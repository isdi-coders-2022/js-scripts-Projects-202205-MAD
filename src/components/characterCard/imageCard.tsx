import { Link } from 'react-router-dom';
import { iCharacter } from '../../interfaces/interfaz';
export function ImageCard({ character }: { character: iCharacter }) {
    const template = (
        <>
            <div>
                <Link to={'details/' + character.id}>
                    <img src={character.image} alt="" />
                </Link>
            </div>
            <p>{character.name}</p>
        </>
    );
    return template;
}
